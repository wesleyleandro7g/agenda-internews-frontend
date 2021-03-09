import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import RegisterAndUpdate from '../../../components/register-and-update'
import List from '../../../components/list-items'
import ToastContainer, {
  notifyError,
  notifySuccess
} from '../../../components/toastify'

import * as S from './styles'

const RegisterInternalActivities = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible])

  function handleCallApi() {
    api.get('/activity/index').then(response => setIndustries(response.data))
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
        .post('/activity/create', data)
        .then(res => {
          notifySuccess(res.data.message)
        })
        .catch(err => {
          if (err) {
            notifyError('Houve um erro inexperado! Tente novamente.')
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

  return (
    <Layout page="Atividades Interna" register={() => toggleRegisterVisible()}>
      <S.Container>
        <S.InfoContainer>
          <S.Text> Descrição </S.Text>
        </S.InfoContainer>

        <S.ScrollArea speed={0.6}>
          {industries &&
            industries.map(item => (
              <List key={item.id} description={item.descricao} />
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegisterActivite}>
        <RegisterAndUpdate
          toggleVisible={() => toggleRegisterVisible()}
          title="Cadastrar atividade interna"
          visible={registerVisible}
        />
      </Form>

      <ToastContainer />
    </Layout>
  )
}

export default RegisterInternalActivities
