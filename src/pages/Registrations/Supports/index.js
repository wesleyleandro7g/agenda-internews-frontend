import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import Input03 from '../../../components/inputs/input03'
import Input04 from '../../../components/inputs/input04'
import Button01 from '../../../components/buttons/button01'
import Button02 from '../../../components/buttons/button02'
import Modal from '../../../components/modal'

import I from '../../../utils/Icons'

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
      const schema = Yup.object().shape({
        nome: Yup.string().min(3).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })
      api
        .post('/support/create', data)
        .then(res => {
          if (res.status === 400) alert('Erro! Suporte já cadastrado!')
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

  return (
    <Layout page="Suportes">
      <S.Container>
        <S.HeaderWrapper>
          <Button02
            label="Cadastrar"
            icon={I.RiAddCircleLine}
            onClick={() => toggleRegisterVisible()}
          />
        </S.HeaderWrapper>

        <S.Info>
          <S.Text> nome </S.Text>
        </S.Info>

        <S.ScrollArea speed={0.6}>
          {industries &&
            industries.map(item => (
              <S.ListWrapper key={item.id}>
                <S.Text> {item.nome} </S.Text>
              </S.ListWrapper>
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegisterSupport}>
        <Modal visible={registerVisible}>
          <S.ModalWrapper>
            <S.ContentHeader>
              <h6>Novo Suporte</h6>
            </S.ContentHeader>

            <S.ContentMain>
              <S.SupportInputWrapper>
                <Input03 label="Nome" name="nome" type="text" />

                <Input04 name="id_usuario" Options={users} />
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
        </Modal>
      </Form>
    </Layout>
  )
}

export default RegisterSupports
