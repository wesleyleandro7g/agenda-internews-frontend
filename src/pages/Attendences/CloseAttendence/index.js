/* eslint-disable array-callback-return */
import React, { useState, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
// import * as Yup from 'yup'

import api from '../../../services/API'

import Modal from '../../../components/modal'
import CheckBox from '../../../components/inputs/checkbox'
import Button02 from '../../../components/buttons/button02'
import Input03 from '../../../components/inputs/input03'

import I from '../../../utils/Icons'

import { notifySuccess } from '../../../components/toastify'

import * as S from './styles'

const CloseAttendence = ({
  modalCloseVisible,
  attendenceID,
  clientName,
  closeModal,
  finish
}) => {
  const formRef = useRef(null)
  const [reasonsClosing, setReasonsClosing] = useState([])
  const [reasonSelected, setReasonSelected] = useState([])
  const [version, setVersion] = useState('')
  const [receptionist, setReceptionist] = useState('')

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
    api
      .put('/attendence/update/close', {
        id_atendimento: attendenceID,
        fech_motivos: reasonSelected,
        versao_internews: version,
        nome_atendente: receptionist
      })
      .then(response => notifySuccess(response.data.message))

    finish()
  }

  return (
    <Modal visible={modalCloseVisible}>
      <S.Container>
        <S.Header>
          <S.Title> {clientName} </S.Title>
        </S.Header>
        <S.Main>
          <Form ref={formRef}>
            <S.Details>
              <Input03
                label="Atendido por"
                name="nome_atendente"
                type="text"
                onChange={e => setReceptionist(e.target.value)}
              />
              <Input03
                label="Versão do InterNews"
                name="versao_internews"
                type="text"
                mask="9.99.9"
                onChange={e => setVersion(e.target.value)}
              />
            </S.Details>
          </Form>
          <S.SubTitle>Selecione o que foi feito no atendimento:</S.SubTitle>
          <S.ScrollReasons>
            <S.ModalMainGrid>
              {reasonsClosing.map(item => (
                <CheckBox
                  key={item.id}
                  label={item.descricao}
                  value={item.id}
                  onChange={e =>
                    handleReasonsSelected(e.target.checked, item.id)
                  }
                />
              ))}
            </S.ModalMainGrid>
          </S.ScrollReasons>
        </S.Main>
        <S.ModalFooter>
          <Button02
            label="Confirmar"
            bgColor="#79D279"
            onClick={() => handleCosingAttendence()}
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

export default CloseAttendence
