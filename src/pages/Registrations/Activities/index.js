import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import Input03 from '../../../components/inputs/input03'
import Button02 from '../../../components/buttons/button02'
import Modal from '../../../components/modal'
import List from '../../../components/list-items'
import Confirmation from '../../../components/confirmation'

import ToastContainer, {
  notifyError,
  notifySuccess
} from '../../../components/toastify'

import I from '../../../utils/Icons'

import * as S from './styles'
const RegisterActivities = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)
  const [updateVisible, setUpdateVisible] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)
  const [alertExecuted, setAlertExecuted] = useState(false)
  const [identifier, setIdentifier] = useState()

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible, alertExecuted])

  function handleCallApi() {
    api.get('/industry/index').then(response => setIndustries(response.data))
  }

  function toggleRegisterVisible() {
    setRegisterVisible(!registerVisible)
  }

  async function handleRegisterActivite(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/industry/create', data)
        .then(res => {
          notifySuccess(res.data.message)
          setAlertExecuted(!alertExecuted)
        })
        .catch(err => {
          if (err) {
            notifyError(err.message)
            setAlertExecuted(!alertExecuted)
          }
        })

      formRef.current.setErrors({})

      toggleRegisterVisible()

      reset()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {}

        error.inner.forEach(err => {
          errorMessages[err.path] = err.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }

  async function handleUpdate(data) {
    api
      .put(`/industry/update/${identifier}`, data)
      .then(response => {
        notifySuccess(response.data.message)
        setAlertExecuted(!alertExecuted)
      })
      .catch(err => {
        notifyError(err.message)
        setAlertExecuted(!alertExecuted)
      })
  }

  function handleFill(item) {
    formRef.current.setData({
      descricao: item.descricao
    })

    setIdentifier(item.id)
    toggleUpdateVisible()
  }

  function toggleUpdateVisible() {
    setUpdateVisible(!updateVisible)
  }

  async function handleDelete(id) {
    setConfirmationVisible(!confirmationVisible)

    api
      .delete(`/industry/delete/${id}`)
      .then(response => {
        notifyError(response.data.message)
        setAlertExecuted(!alertExecuted)
      })
      .catch(err => {
        notifyError(err.message)
        setAlertExecuted(!alertExecuted)
      })
  }

  function handleConfirmation(id) {
    setConfirmationVisible(!confirmationVisible)
    setIdentifier(id)
  }

  return (
    <Layout page="Ramos de Atividade" register={() => toggleRegisterVisible()}>
      <S.Container>
        <S.InfoContainer>
          <S.Text> Descrição </S.Text>
        </S.InfoContainer>

        <S.ScrollArea>
          {industries &&
            industries.map(item => (
              <List
                key={item.id}
                description={item.descricao}
                onUpdate={() => handleFill(item)}
                onDelete={() => handleConfirmation(item.id)}
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      {/* Modal com formulário de cadastro de um novo ramo de atividade */}
      <Form ref={formRef} onSubmit={handleRegisterActivite}>
        <Modal visible={registerVisible}>
          <S.ModalWrapper>
            <S.Header>
              <S.Title>Novo ramo de atividade</S.Title>
            </S.Header>

            <S.Main>
              <Input03 label="Descrição" name="descricao" type="text" />
            </S.Main>

            <S.Footer>
              <Button02
                label="Cadastrar"
                bgColor="#79D279"
                type="submit"
                icon={I.RiCheckboxCircleLine}
              />
              <Button02
                label="Cancelar"
                bgColor="#FF6666"
                onClick={() => toggleRegisterVisible()}
                icon={I.RiCloseLine}
              />
            </S.Footer>
          </S.ModalWrapper>
        </Modal>
      </Form>

      {/* Modal com formulário de edição de um ramo de atividade */}
      <Form ref={formRef} onSubmit={handleUpdate}>
        <Modal visible={updateVisible}>
          <S.ModalWrapper>
            <S.Header>
              <S.Title>Edição de ramo de atividade</S.Title>
            </S.Header>

            <S.Main>
              <Input03 label="Descrição" name="descricao" type="text" />
            </S.Main>

            <S.Footer>
              <Button02
                label="Confirmar"
                bgColor="#79D279"
                type="submit"
                icon={I.RiCheckboxCircleLine}
              />
              <Button02
                label="Cancelar"
                bgColor="#FF6666"
                onClick={() => setUpdateVisible(!updateVisible)}
                icon={I.RiCloseLine}
              />
            </S.Footer>
          </S.ModalWrapper>
        </Modal>
      </Form>

      {/* Modal de confirmação */}
      <Confirmation
        visible={confirmationVisible}
        confirmated={() => handleDelete(identifier)}
        closeConfirmation={() => setConfirmationVisible(!confirmationVisible)}
      />

      <ToastContainer />
    </Layout>
  )
}

export default RegisterActivities
