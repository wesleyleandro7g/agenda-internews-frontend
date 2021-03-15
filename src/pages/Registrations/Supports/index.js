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

const RegisterSupports = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [users, setUsers] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible])

  function handleCallApi() {
    api.get('/support/index').then(response => setIndustries(response.data))
    api.get('/users/index').then(res => setUsers(res.data))
  }

  function toggleRegisterVisible() {
    setRegisterVisible(!registerVisible)
  }

  async function handleRegisterSupport(data, { reset }) {
    try {
      // const schema = Yup.object().shape({
      //   nome: Yup.string().min(3).required('Informe a descrição')
      // })

      // await schema.validate(data, {
      //   abortEarly: false
      // })

      api
        .post('/support/create', data)
        .then(res => {
          notifySuccess(res.data.message)
          toggleRegisterVisible()
        })
        .catch(err => {
          if (err) {
            notifyError('Houve um erro inexperado! Tente novamente.')
          }
        })

      formRef.current.setErrors({})

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

  return (
    <Layout page="Suportes" register={() => toggleRegisterVisible()}>
      <S.Container>
        <S.InfoContainer>
          <S.Text> Nome </S.Text>
        </S.InfoContainer>

        <S.ScrollArea speed={0.6}>
          {industries &&
            industries.map(item => (
              <List key={item.id} description={item.nome} />
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegisterSupport}>
        <RegisterAndUpdate
          title="Cadastro de suporte"
          visible={registerVisible}
          toggleVisible={() => toggleRegisterVisible()}
          users={users}
        />
      </Form>

      <ToastContainer />
    </Layout>
  )
}

export default RegisterSupports
