import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import ParticlesEffect from '../../components/particles'
import Input01 from '../../components/inputs/input01'

import Logo from '../../assets/TPLogo.png'

import * as S from './styles'

const Login = () => {
  const formRef = useRef(null)
  const history = useHistory()

  async function handleLogin(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('Digite seu nome'),
        senha: Yup.string().required('Disgite sua senha')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      // api.put(`/events/client/update/${eventID}`, data)
      history.push('dashboard')

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
    <S.Container>
      <S.Content>
        <S.LogoWrapper>
          <S.Img src={Logo} />
        </S.LogoWrapper>

        <S.InputWrapper>
          <Form ref={formRef} onSubmit={handleLogin}>
            <Input01 label="Nome" name="nome" type="text" />
            <Input01 label="Senha" name="senha" type="password" />

            <S.Button type="submit">Entrar</S.Button>
          </Form>
        </S.InputWrapper>
      </S.Content>

      <ParticlesEffect />
    </S.Container>
  )
}

export default Login
