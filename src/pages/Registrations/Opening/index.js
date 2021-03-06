import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import List from '../../../components/list-items'
import RegisterAndUpdate from '../../../components/register-and-update'

import ToastContainer, {
  notifySuccess,
  notifyError
} from '../../../components/toastify'

import * as S from './styles'

const RegisterOpenig = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)
  const [updateVisible, setUpdateVisible] = useState(false)
  const [identifier, setIdentifier] = useState()
  const [alertExecuted, setAlertExecuted] = useState(false)

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible, updateVisible, alertExecuted])

  function handleCallApi() {
    api
      .get('/reasons/opening/index')
      .then(response => setIndustries(response.data))
  }

  function toggleRegisterVisible() {
    setRegisterVisible(!registerVisible)
  }

  async function handleRegisterTool(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(3).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/reasons/opening/create', data)
        .then(res => {
          notifySuccess(res.data.message)
          setAlertExecuted(!alertExecuted)
        })
        .catch(err => {
          if (err) {
            notifyError(err.data.message)
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

  function handleFill(item) {
    formRef.current.setData({
      descricao: item.descricao
    })

    setIdentifier(item.id)
    toggleUpdateVisible()
  }

  async function handleUpdate(data) {
    api.put(`/reasons/opening/update/${identifier}`, data).then(response => {
      notifySuccess(response.data.message)
      setAlertExecuted(!alertExecuted)
    })

    toggleUpdateVisible()
  }

  function toggleUpdateVisible() {
    setUpdateVisible(!updateVisible)
  }

  return (
    <Layout
      page="Motivos de abertura de OS"
      register={() => toggleRegisterVisible()}
    >
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
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      {/* Modal para cadastrar um novo motivo */}
      <Form ref={formRef} onSubmit={handleRegisterTool}>
        <RegisterAndUpdate
          toggleVisible={() => toggleRegisterVisible()}
          title="Novo Motivo"
          visible={registerVisible}
        />
      </Form>

      {/* Modal para editar um motivo */}
      <Form ref={formRef} onSubmit={handleUpdate}>
        <RegisterAndUpdate
          toggleVisible={() => toggleUpdateVisible()}
          title="Edição de motivo"
          visible={updateVisible}
        />
      </Form>

      <ToastContainer />
    </Layout>
  )
}

export default RegisterOpenig
