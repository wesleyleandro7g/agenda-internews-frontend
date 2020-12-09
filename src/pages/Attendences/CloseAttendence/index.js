/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import CheckBox from '../../../components/inputs/checkbox'

import * as S from './styles'

const CloseAttendence = ({
  modalCloseVisible,
  attendenceID,
  clientName,
  closeModal,
  finish
}) => {
  const [reasonsClosing, setReasonsClosing] = useState([])
  const [reasonSelected, setReasonSelected] = useState([])

  useEffect(() => {
    handleCallApi()
  }, [])

  function handleCallApi() {
    api.get('/reasons/closing/index').then(res => setReasonsClosing(res.data))
  }

  function handleReasonsSelected(e, id) {
    if (e) {
      reasonSelected.push({
        id_fechamento: id
      })
    } else {
      setReasonSelected(
        reasonSelected.filter(item => item.id_fechamento !== id)
      )
    }
  }

  function handleCosingAttendence() {
    api.put('/attendence/update/close', {
      id_atendimento: attendenceID,
      fech_motivos: reasonSelected
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
          <S.ModalMainGrid>
            {reasonsClosing.map(item => (
              <CheckBox
                key={item.id}
                label={item.descricao}
                value={item.id}
                onChange={e => handleReasonsSelected(e.target.checked, item.id)}
              />
            ))}
          </S.ModalMainGrid>
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
