import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import api from '../../services/API'

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

      api
        .post('/auth/authenticate', data)
        .then(response => {
          const sig = response.data.payload.userName.substr(0, 1).toUpperCase()

          localStorage.setItem('user-name', response.data.payload.userName)
          localStorage.setItem('user-id', response.data.payload.userID)
          localStorage.setItem('user-sig', sig)
          localStorage.setItem(
            'user-sector-name',
            response.data.payload.sectorName
          )
          localStorage.setItem('user-sector-id', response.data.payload.sectorID)
          localStorage.setItem('Access-token', response.data.token)
          localStorage.setItem('support-id', response.data.payload.supportID)

          history.push('dashboard')

          reset()
        })
        .catch(err => {
          if (err) {
            console.log({ Caralho: err })
            // if (err.response.status === 404) {
            //   formRef.current.setErrors({
            //     nome: 'Erro'
            //   })
            // } else if (err.response.status === 401) {
            //   formRef.current.setErrors({
            //     senha: 'Erro'
            //   })
            // }
          }
        })
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
