import React, { useState, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import api from '../../services/API'

import Layout from '../../components/layout'
import Input03 from '../../components/inputs/input03'
import Input04 from '../../components/inputs/input04'
import Button01 from '../../components/buttons/button01'

import {
  InputsClientData,
  ModuleOptions,
  StateOptions,
  SectorOptions
} from './data'

import * as S from './styles'

const Registrations = () => {
  const formRef = useRef(null)
  const [cities, setCities] = useState([])
  const [industry, setIndustry] = useState([])
  const [users, setUsers] = useState([])
  const [supports, setSupports] = useState([])

  useEffect(() => {
    api.get('/cities/index').then(res => setCities(res.data))
    api.get('/industry/index').then(res => setIndustry(res.data))
    api.get('/users/index').then(res => setUsers(res.data))
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

  async function handleRegisterOpenigReason(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data)

      api
        .post('/reasons/opening/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Motivo cadastrado!')
            formRef.current.setErrors({})

            reset()
          } else if (res.status === 400) {
            alert('Erro! Motivo já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterClosingReason(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data)

      api
        .post('/reasons/closing/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Motivo cadastrado!')
            formRef.current.setErrors({})

            reset()
          } else if (res.status === 400) {
            alert('Erro! Motivo já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterTool(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/tools/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Ferramenta cadastrada!')
            formRef.current.setErrors({})

            reset()
          } else if (res.status === 400) {
            alert('Erro! Ferramenta já cadastrada!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterActivite(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/industry/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Ramo cadastrado!')
          } else if (res.status === 400) {
            alert('Erro! Ramo já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterCity(data, { reset }) {
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
          if (res.status === 200) {
            alert('Cidade cadastrada!')
          } else if (res.status === 400) {
            alert('Erro! Cidade já cadastrada!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterCompetitor(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        descricao: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)

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

  async function handleRegisterSupport(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().min(5).required('Informe a descrição')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/support/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Suporte cadastrado!')
          } else if (res.status === 400) {
            alert('Erro! Suporte já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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

  async function handleRegisterUser(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().min(5).required('Informe o nome')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      api
        .post('/users/create', data)
        .then(res => {
          if (res.status === 200) {
            alert('Usuário cadastrado!')
          } else if (res.status === 400) {
            alert('Erro! Usuário já cadastrado!')
          }
        })
        .catch(err => {
          if (err) {
            alert('Houve um erro inexperado! Tente novamente.')
            console.log(err)
          }
        })

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
    <Layout page="Cadastros">
      <S.ScrollArea speed={0.6}>
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
              <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
            </S.RegisterButtonWrapper>
          </S.Content>
        </Form>

        <S.ContentGrig>
          <Form ref={formRef} onSubmit={handleRegisterOpenigReason}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Motivo de abertura</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="descricao" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form ref={formRef} onSubmit={handleRegisterClosingReason}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Motivo de fechamento</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="descricao" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form ref={formRef} onSubmit={handleRegisterTool}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Ferramenta</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="descricao" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form ref={formRef} onSubmit={handleRegisterActivite}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Ramo de atividade</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="descricao" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form useRef={formRef} onSubmit={handleRegisterUser}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Usuário</h6>
              </S.ContentHeader>
              <S.SupportInputWrapper>
                <Input03 label="Nome" name="nome" type="text" />
                <Input03 label="Contato" name="contato" type="text" />
                <Input03 label="Senha" name="senha" type="text" />

                <Input04 name="id_setor" Options={SectorOptions} />
              </S.SupportInputWrapper>

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form ref={formRef} onSubmit={handleRegisterSupport}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Suporte</h6>
              </S.ContentHeader>
              <S.SupportInputWrapper>
                <Input03 label="Nome" name="nome" type="text" />

                <Input04 name="id_usuario" Options={users} />
              </S.SupportInputWrapper>

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form ref={formRef} onSubmit={handleRegisterCity}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Cidade</h6>
              </S.ContentHeader>
              <S.CityInputWrapper>
                <Input03 label="Descrição" name="descricao" type="text" />
                <S.OptionWrapperState>
                  <Input04 name="id_estado" Options={StateOptions} />
                </S.OptionWrapperState>
              </S.CityInputWrapper>

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>

          <Form useRef={formRef} onSubmit={handleRegisterCompetitor}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Sistema concorrente</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="descricao" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" type="submit" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
        </S.ContentGrig>
      </S.ScrollArea>
    </Layout>
  )
}

export default Registrations
