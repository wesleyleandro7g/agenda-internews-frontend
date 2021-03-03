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
const RegisterOpenig = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)
  const [updateVisible, setUpdateVisible] = useState(false)
  const [identifier, setIdentifier] = useState()
  const [alertVisible, setAlertVisible] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible, updateVisible])

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
          if (res.status === 400) alert('Erro! Motivo já cadastrado!')
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

  function handleFill(item) {
    formRef.current.setData({
      descricao: item.descricao
    })

    setIdentifier(item.id)
    toggleUpdateVisible()
  }

  async function handleUpdate(data) {
    api.put(`/reasons/opening/update/${identifier}`, data).then(response => {
      setAlertMessage(response.data.message)
      setAlertVisible(true)
    })

    toggleUpdateVisible()
  }

  function toggleUpdateVisible() {
    setUpdateVisible(!updateVisible)
  }

  return (
    <Layout page="Motivos de abertura de OS">
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
                onUpdate={() => handleFill(item)}
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      {/* Modal para cadastrar um novo motivo */}
      <Form ref={formRef} onSubmit={handleRegisterTool}>
        <Modal visible={registerVisible}>
          <S.ModalWrapper>
            <S.ContentHeader>
              <h6>Novo Motivo</h6>
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

      {/* Modal para editar um motivo */}
      <Form ref={formRef} onSubmit={handleUpdate}>
        <Modal visible={updateVisible}>
          <S.ModalWrapper>
            <S.ContentHeader>
              <h6>Edição de motivo</h6>
            </S.ContentHeader>

            <S.ContentMain>
              <Input03 label="Descrição" name="descricao" type="text" />
            </S.ContentMain>

            <S.ContentFooter>
              <Button01 label="Confirmar" bgColor="#79D279" type="submit" />
              <Button01
                label="Cancelar"
                bgColor="#FF6666"
                onClick={() => toggleUpdateVisible()}
              />
            </S.ContentFooter>
          </S.ModalWrapper>
        </Modal>
      </Form>

      {/* Modal de alerta */}
      <Alert
        visible={alertVisible}
        message={alertMessage}
        closeAlert={() => setAlertVisible(!alertVisible)}
      />
    </Layout>
  )
}

export default RegisterOpenig
