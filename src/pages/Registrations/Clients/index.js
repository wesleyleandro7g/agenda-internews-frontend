import React, { useState, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Layout from '../../../components/layout'
import Input03 from '../../../components/inputs/input03'
import Input04 from '../../../components/inputs/input04'
import Button02 from '../../../components/buttons/button02'

import I from '../../../utils/Icons'

import { InputsClientData, ModuleOptions } from './data'
import * as S from './styles'

const RegisterClient = () => {
  const formRef = useRef(null)
  const [cities, setCities] = useState([])
  const [industry, setIndustry] = useState([])
  const [internalActivity, setInternalActivity] = useState([])
  const [supports, setSupports] = useState([])

  useEffect(() => {
    api.get('/cities/index').then(res => setCities(res.data))
    api.get('/industry/index').then(res => setIndustry(res.data))
    api.get('/activity/index').then(res => setInternalActivity(res.data))
    api.get('/support/index').then(res => setSupports(res.data))
  }, [])

  async function handleRegisterClient(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        razao_social: Yup.string().min(3).required('Informe o nome da empresa')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)

      api
        .post('/clients/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Cliente cadastrado!')
            formRef.current.setErrors({})

            reset()
          } else if (res.status === 400) {
            alert('Erro! Cliente já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
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
    <Layout page="Cadastro de Clientes">
      <Form ref={formRef} onSubmit={handleRegisterClient}>
        <S.Content>
          <S.ContentHeader>
            <h6>Cadastro de cliente</h6>
          </S.ContentHeader>
          <S.ScopeWrapper>
            {InputsClientData.map(item => (
              <Input03
                key={item.id}
                label={item.label}
                name={item.name}
                type={item.type}
              />
            ))}
          </S.ScopeWrapper>
          <S.ScopeWrapper>
            <S.OptionWrapper>
              <S.TitleInputOptions>Modulo do sistema</S.TitleInputOptions>
              <Input04 name="id_modulo" Options={ModuleOptions} />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Atividade interna</S.TitleInputOptions>
              <Input04 name="id_atividade_interna" Options={internalActivity} />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Ramo de atividade</S.TitleInputOptions>
              <Input04 name="id_atividade" Options={industry} />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Suporte responsável</S.TitleInputOptions>
              <Input04 name="id_suporte" Options={supports} />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Cidade</S.TitleInputOptions>
              <Input04 name="id_cidade" Options={cities} />
            </S.OptionWrapper>
          </S.ScopeWrapper>

          <S.RegisterButtonWrapper>
            <Button02
              label="Cadastrar"
              bgColor="#79D279"
              type="submit"
              icon={I.RiCheckboxCircleLine}
            />
          </S.RegisterButtonWrapper>
        </S.Content>
      </Form>
    </Layout>
  )
}

export default RegisterClient
