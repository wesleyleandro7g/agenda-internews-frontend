/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

// import { useClientContext } from '../../../context/ClientContext'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import Radio from '../../../components/inputs/radio'

// import I from '../../../utils/Icons'

import * as S from './styles'

const RepassAttendence = ({
  modalRepassVisible,
  clientName,
  attendenceID,
  closeModal,
  repassed
}) => {
  const [supports, setSupports] = useState([])
  const [supportSelected, setSupportSelected] = useState()

  useEffect(() => {
    handleGetSupports()
  }, [])

  function handleGetSupports() {
    api.get('/support/index').then(res => setSupports(res.data))
  }

  function handleInputRadio(e) {
    setSupportSelected(e.target.value)
  }

  function handleRepassAttendence() {
    api.put('/attendence/repass', {
      id: attendenceID,
      id_suporte: supportSelected
    })
    repassed()
  }

  return (
    <Modal visible={modalRepassVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Title> {clientName} </S.Title>
        </S.ModalHeader>
        <S.ModalMain>
          <h6>Selecione o suporte</h6>

          <form onChange={handleInputRadio}>
            <S.ModalMainGrid>
              {supports.map(item => (
                <Radio
                  key={item.id}
                  name="id_suporte"
                  label={item.nome}
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
            onClick={() => handleRepassAttendence()}
          />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modal>
  )
}

export default RepassAttendence
