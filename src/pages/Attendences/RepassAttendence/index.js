/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

// import { useClientContext } from '../../../context/ClientContext'

import Modal from '../../../components/modal'
import Radio from '../../../components/inputs/radio'
import Button02 from '../../../components/buttons/button02'

import I from '../../../utils/Icons'

import { notifySuccess } from '../../../components/toastify'

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
    api
      .put('/attendence/update/repass', {
        id: attendenceID,
        id_suporte: supportSelected
      })
      .then(response => notifySuccess('Atendimento repassado!'))
    repassed()
  }

  return (
    <Modal visible={modalRepassVisible}>
      <S.Container>
        <S.Header>
          <S.Title> {clientName} </S.Title>
        </S.Header>
        <S.Main>
          <S.SubTitle>
            Selecione o suporte para qual deseja transferir o atendimento
          </S.SubTitle>

          <form onChange={handleInputRadio}>
            <S.ModalMainGrid>
              {supports.map(item => (
                <Radio
                  key={item.id}
                  name="id_suporte"
                  label={item.descricao}
                  id={item.id}
                  value={item.id}
                />
              ))}
            </S.ModalMainGrid>
          </form>
        </S.Main>
        <S.ModalFooter>
          <Button02
            label="Confirmar"
            bgColor="#79D279"
            onClick={() => handleRepassAttendence()}
            icon={I.RiCheckboxCircleLine}
          />
          <Button02
            label="Cancelar"
            bgColor="#FF6666"
            onClick={closeModal}
            icon={I.RiCloseLine}
          />
        </S.ModalFooter>
      </S.Container>
    </Modal>
  )
}

export default RepassAttendence
