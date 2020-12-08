/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import Radio from '../../../components/inputs/radio'

import * as S from './styles'

const CloseAttendence = ({
  modalCloseVisible,
  clientID,
  clientName,
  closeModal,
  finish
}) => {
  const [reasonsClosing, setReasonsClosing] = useState([])
  const [reasonSelected, setReasonSelected] = useState(1)

  useEffect(() => {
    handleCallApi()
  }, [])

  function handleCallApi() {
    api.get('/reasons/closing/index').then(res => setReasonsClosing(res.data))
  }

  function handleReasonSelected(e) {
    setReasonSelected(e.target.value)
  }

  function handleCosingAttendence() {
    api.put('/attendence/update/close', {
      id: clientID,
      id_fechamento: reasonSelected
    })

    finish()
  }

  return (
    <Modal visible={modalCloseVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Title> {clientName} </S.Title>
        </S.ModalHeader>
        <S.ModalMain>
          <h6>Opções de fechamento</h6>
          <form onChange={handleReasonSelected}>
            <S.ModalMainGrid>
              {reasonsClosing.map(item => (
                <Radio
                  key={item.id}
                  name="id_fechamento"
                  label={item.descricao}
                  id={item.id}
                  value={item.id}
                />
              ))}
            </S.ModalMainGrid>
          </form>
        </S.ModalMain>
        <S.ModalFooter>
          <Button01
            label="Confirmar"
            bgColor="#79D279"
            onClick={() => handleCosingAttendence()}
          />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modal>
  )
}

export default CloseAttendence
