import React, { useRef, useEffect, useState } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import Button02 from '../../../components/buttons/button02'
import RegisterAndUpdate from '../../../components/register-and-update'

import I from '../../../utils/Icons'

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
          if (res.status === 400) alert('Erro! Atividade já cadastrada!')
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
    <Layout page="Atividades Interna">
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
              <S.ListWrapper key={item.id}>
                <S.Text> {item.descricao} </S.Text>
              </S.ListWrapper>
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
    </Layout>
  )
}

export default RegisterInternalActivities
