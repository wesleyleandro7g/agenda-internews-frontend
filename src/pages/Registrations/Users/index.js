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

import { SectorOptions, DataInfoOptions } from './data'

import * as S from './styles'

const RegisterUser = () => {
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
    api.get('/users/index').then(response => setIndustries(response.data))
  }

  function toggleRegisterVisible() {
    setRegisterVisible(!registerVisible)
  }

  async function handleRegisterUser(data, { reset }) {
    console.log(data)
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(3).required('Informe o nome'),
        senha: Yup.string().min(3).required('Informe a senha')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/users/create', data)
        .then(res => {
          notifySuccess(res.data.message)
        })
        .catch(err => {
          if (err) {
            notifyError(err.message)
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
    <Layout page="Usuários" register={() => toggleRegisterVisible()}>
      <S.Container>
        <S.InfoContainer>
          {DataInfoOptions.map(item => (
            <S.Text key={item.id}>{item.descricao}</S.Text>
          ))}
        </S.InfoContainer>

        <S.ScrollArea speed={0.6}>
          {industries &&
            industries.map(item => (
              <List
                key={item.id}
                description={item.descricao}
                description2={item.setor.descricao}
                description3={item.contato}
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegisterUser}>
        <RegisterAndUpdate
          title="Cadastrar usuário"
          visible={registerVisible}
          toggleVisible={() => toggleRegisterVisible()}
          contact
          password
          sector={SectorOptions}
          large
        />
        {/* <Modal visible={registerVisible}>
          <S.ModalWrapper>
            <S.ContentHeader>
              <h6>Novo Usuário</h6>
            </S.ContentHeader>

            <S.ContentMain>
              <S.SupportInputWrapper>
                <Input03 label="Nome" name="nome" type="text" />
                <Input03 label="Contato" name="contato" type="text" />
                <Input03 label="Senha" name="senha" type="text" />

                <Input04 name="id_setor" Options={SectorOptions} />
              </S.SupportInputWrapper>
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
        </Modal> */}
      </Form>

      <ToastContainer />
    </Layout>
  )
}

export default RegisterUser
