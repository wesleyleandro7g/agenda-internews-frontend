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

import { StateOptions, DataInfoOptions } from './data'

import * as S from './styles'

const RegisterCities = () => {
  const formRef = useRef(null)
  const [industries, setIndustries] = useState([])
  const [registerVisible, setRegisterVisible] = useState(false)
  // const [updateVisible, setUpdateVisible] = useState(false)
  // const [identifier, setIdentifier] = useState()

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [registerVisible])

  function handleCallApi() {
    api.get('/cities/index').then(response => setIndustries(response.data))
  }

  function toggleRegisterVisible() {
    setRegisterVisible(!registerVisible)
  }

  async function handleRegister(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/cities/create', data)
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

  // async function handleUpdate(data, { reset }) {
  //   try {
  //     const schema = Yup.object().shape({
  //       descricao: Yup.string().min(5).required('Informe a descrição')
  //     })

  //     await schema.validate(data, {
  //       abortEarly: false
  //     })

  //     api
  //       .post(`/cities/update/${identifier}`, data)
  //       .then(res => {
  //         if (res.status === 400) alert('Erro! Atividade já cadastrada!')
  //       })
  //       .catch(err => {
  //         if (err) {
  //           alert('Houve um erro inexperado! Tente novamente.')
  //         }
  //       })

  //     formRef.current.setErrors({})

  //     toggleRegisterVisible()

  //     reset()
  //   } catch (error) {
  //     if (error instanceof Yup.ValidationError) {
  //       const errorMessages = {}

  //       error.inner.forEach(err => {
  //         errorMessages[err.path] = err.message
  //       })

  //       formRef.current.setErrors(errorMessages)
  //     }
  //   }
  // }

  // function handleFill(item) {
  //   formRef.current.setData({
  //     descricao: item.descricao,
  //     id_estado: item.estado
  //   })

  //   setIdentifier(item.id)
  //   toggleUpdateVisible()
  // }

  // function toggleUpdateVisible() {
  //   setUpdateVisible(!updateVisible)
  // }

  return (
    <Layout page="Cidades" register={() => toggleRegisterVisible()}>
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
                description2={item.estado && item.estado.descricao}
              />
            ))}
        </S.ScrollArea>
      </S.Container>

      <Form ref={formRef} onSubmit={handleRegister}>
        <RegisterAndUpdate
          toggleVisible={() => toggleRegisterVisible()}
          title="Cadastro de cidade"
          visible={registerVisible}
          state={StateOptions}
        />
      </Form>

      {/* <Form ref={formRef} onSubmit={handleUpdate}>
        <RegisterAndUpdate
          toggleVisible={() => toggleUpdateVisible()}
          title="Edição de cidade"
          visible={updateVisible}
          state={StateOptions}
        />
      </Form> */}

      <ToastContainer />
    </Layout>
  )
}

export default RegisterCities
