/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../../services/API'

import Modal from '../../../components/modal'
import Input03 from '../../../components/inputs/input03'
import Input04 from '../../../components/inputs/input04'
import Button02 from '../../../components/buttons/button02'

import I from '../../../utils/Icons'

import { InputsClientData, ModuleOptions } from './data'

import * as S from './styles'

const ClientEditable = ({ visible, onClose, dataOrigin }) => {
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

  //   formRef.current.setData({
  //     razao_social: dataOrigin.razao_social,
  //     cnpj: dataOrigin.cnpj,
  //     endereco: dataOrigin.endereco,
  //     quantidade_acessos: dataOrigin.quantidade_acessos,
  //     quantidade_empresas: dataOrigin.quantidade_empresas,
  //     quantidade_bancos: dataOrigin.quantidade_bancos,
  //     identificador_servidor: dataOrigin.identificador_servidor,
  //     identificador_internews: dataOrigin.identificador_internews,
  //     mensalidade: dataOrigin.mensalidade
  //   })

  async function handleRegisterClient(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        razao_social: Yup.string().min(3).required('Informe o nome da empresa')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      //   console.log(data)

      //   api
      //     .post('/clients/create', data)
      //     .then(res => {
      //       if (res.status === 200) {
      //         alert('Cliente cadastrado!')
      //         formRef.current.setErrors({})

      //         reset()
      //       } else if (res.status === 400) {
      //         alert('Erro! Cliente já cadastrado!')
      //       }
      //     })
      //     .catch(err => {
      //       if (err) {
      //         alert('Houve um erro inexperado! Tente novamente.')
      //         console.log(err)
      //       }
      //     })
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
    <Modal visible={visible}>
      <Form
        ref={formRef}
        onSubmit={handleRegisterClient}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <S.Container>
          <S.Header>
            <h6> Editar cadasto </h6>
            <I.RiCloseLine size={24} onClick={onClose} cursor="pointer" />
          </S.Header>
          <S.Main>
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
                <Input04
                  name="id_atividade_interna"
                  Options={internalActivity}
                />
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
          </S.Main>
          <S.Footer>
            <Button02
              label="Salvar alterações"
              icon={I.RiCheckboxCircleLine}
              bgColor="#79D279"
            />
          </S.Footer>
        </S.Container>
      </Form>
    </Modal>
  )
}

export default ClientEditable
