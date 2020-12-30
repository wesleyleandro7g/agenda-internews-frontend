/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
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

const ClientEditable = () => {
  const formRef = useRef(null)
  const history = useHistory()
  const [cities, setCities] = useState([])
  const [industry, setIndustry] = useState([])
  const [internalActivity, setInternalActivity] = useState([])
  const [supports, setSupports] = useState([])

  const [moduleSelected, setModuleSelected] = useState()
  const [activitySelected, setActivitySelected] = useState()
  const [industrySelected, setIndustrySelected] = useState()
  const [supportSelected, setSupportSelected] = useState()
  const [citySelected, setCitySelected] = useState()

  useEffect(() => {
    api.get('/cities/index').then(res => setCities(res.data))
    api.get('/industry/index').then(res => setIndustry(res.data))
    api.get('/activity/index').then(res => setInternalActivity(res.data))
    api.get('/support/index').then(res => setSupports(res.data))
    handleHystoryData()
  }, [])

  function handleHystoryData() {
    const dataOrigin = history.location.state.data
    console.log(dataOrigin)

    formRef.current.setData({
      razao_social: dataOrigin.razao_social,
      cnpj: dataOrigin.cnpj,
      endereco: dataOrigin.endereco,
      quantidade_acessos: dataOrigin.quantidade_acessos,
      quantidade_empresas: dataOrigin.quantidade_empresas,
      quantidade_bancos: dataOrigin.quantidade_bancos,
      identificador_servidor: dataOrigin.identificador_servidor,
      identificador_internews: dataOrigin.identificador_internews,
      mensalidade: dataOrigin.mensalidade
    })

    setModuleSelected(dataOrigin.id_modulo)
    setActivitySelected(dataOrigin.id_atividade_interna)
    setIndustrySelected(dataOrigin.id_atividade)
    setSupportSelected(dataOrigin.id_suporte)
    setCitySelected(dataOrigin.id_cidade)
  }

  async function handleRegisterClient(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        razao_social: Yup.string().min(3).required('Informe o nome da empresa')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // console.log(data)728 642 498

      api
        .put('/clients/update', data)
        .then(res => {
          if (res.status === 200) {
            alert('Sucesso!!')
            formRef.current.setErrors({})
            handleGoBack()

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

  function handleGoBack() {
    history.goBack()
  }

  return (
    <Layout page="Editar Cadastro">
      <S.SubHeader>
        <I.RiArrowLeftLine onClick={() => handleGoBack()} cursor="pointer" />
        <S.TextArrow>Voltar</S.TextArrow>
      </S.SubHeader>
      <Form ref={formRef} onSubmit={handleRegisterClient}>
        <S.Content>
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
              <Input04
                name="id_modulo"
                Options={ModuleOptions}
                selected={moduleSelected}
              />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Atividade interna</S.TitleInputOptions>
              <Input04
                name="id_atividade_interna"
                Options={internalActivity}
                selected={activitySelected}
              />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Ramo de atividade</S.TitleInputOptions>
              <Input04
                name="id_atividade"
                Options={industry}
                selected={industrySelected}
              />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Suporte responsável</S.TitleInputOptions>
              <Input04
                name="id_suporte"
                Options={supports}
                selected={supportSelected}
              />
            </S.OptionWrapper>

            <S.OptionWrapper>
              <S.TitleInputOptions>Cidade</S.TitleInputOptions>
              <Input04
                name="id_cidade"
                Options={cities}
                selected={citySelected}
              />
            </S.OptionWrapper>
          </S.ScopeWrapper>

          <S.RegisterButtonWrapper>
            <Button02
              label="Salvar alterações"
              icon={I.RiCheckboxCircleLine}
              bgColor="#79D279"
            />
          </S.RegisterButtonWrapper>
        </S.Content>
      </Form>
    </Layout>
  )
}

export default ClientEditable
