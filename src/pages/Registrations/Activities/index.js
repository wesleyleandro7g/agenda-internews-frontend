import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import Input03 from '../../../components/inputs/input03'
import Button01 from '../../../components/buttons/button01'
import Button02 from '../../../components/buttons/button02'
import Modal from '../../../components/modal'
import List from '../../../components/list-items'
import Alert from '../../../components/alert'

import I from '../../../utils/Icons'

import * as S from './styles'
import Confirmation from '../../../components/confirmation'

const RegisterActivities = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [identifier, setIdentifier] = useState()

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible])

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
          if (res.status === 400) alert('Erro! Ramo já cadastrado!')
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
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

  function handleUpdate(id) {
    setAlertVisible(true)
    setAlertMessage('Teste')
  }

  async function handleDelete(id) {
    setConfirmationVisible(!confirmationVisible)

    api
      .delete(`/industry/delete/${id}`)
      .then(response => {
        setAlertMessage(response.data.response)
        setAlertVisible(true)
      })
      .catch(err => console.log(err))
  }

  function handleConfirmation(id) {
    setConfirmationVisible(!confirmationVisible)
    setIdentifier(id)
  }

  return (
    <Layout page="Ramos de Atividade">
      <S.Container>
        <S.HeaderWrapper>
          <Button02
            label="Cadastrar"
            icon={I.RiAddCircleLine}
            onClick={() => toggleRegisterVisible()}
          />
        </S.HeaderWrapper>

        <S.Info>
          <S.Text> descrição </S.Text>
        </S.Info>

        <S.ScrollArea speed={0.6}>
          {industries &&
            industries.map(item => (
              <List
                key={item.id}
                description={item.descricao}
                onUpdate={() => handleUpdate(item.id)}
                onDelete={() => handleConfirmation(item.id)}
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegisterActivite}>
        <Modal visible={registerVisible}>
          <S.ModalWrapper>
            <S.ContentHeader>
              <h6>Novo Ramo de atividade</h6>
            </S.ContentHeader>

            <S.ContentMain>
              <Input03 label="Descrição" name="descricao" type="text" />
            </S.ContentMain>

            <S.ContentFooter>
              <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              <Button01
                label="Cancelar"
                bgColor="#FF6666"
                onClick={() => toggleRegisterVisible()}
              />
            </S.ContentFooter>
          </S.ModalWrapper>
        </Modal>
      </Form>

      <Alert
        visible={alertVisible}
        message={alertMessage}
        closeAlert={() => setAlertVisible(!alertVisible)}
      />

      <Confirmation
        visible={confirmationVisible}
        confirmated={() => handleDelete(identifier)}
        closeConfirmation={() => setConfirmationVisible(!confirmationVisible)}
      />
    </Layout>
  )
}

export default RegisterActivities
