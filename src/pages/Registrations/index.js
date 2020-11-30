import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import Layout from '../../components/layout'
import Input03 from '../../components/inputs/input03'
import Input04 from '../../components/inputs/input04'
import Button01 from '../../components/buttons/button01'

import { InputsClientData, ModuleOptions } from './data'

import * as S from './styles'

const Registrations = () => {
  const formRef = useRef(null)

  async function handleRegisterClient(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().min(3).required('Informe o nome da empresa')
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

  async function handleRegisterOpenigReason(data, { reset }) {
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

  async function handleRegisterClosingReason(data, { reset }) {
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

  async function handleRegisterTool(data, { reset }) {
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

  async function handleRegisterActivite(data, { reset }) {
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

  async function handleRegisterCity(data, { reset }) {
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
                <Input04 name="modulo" Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Ramo de atividade</S.TitleInputOptions>
                <Input04 name="ramo_ativiadade" Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Suporte responsável</S.TitleInputOptions>
                <Input04 name="suporte" Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Cidade</S.TitleInputOptions>
                <Input04 name="cidade" Options={ModuleOptions} />
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
          <Form ref={formRef} onSubmit={handleRegisterCity}>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Cidade</h6>
              </S.ContentHeader>
              <S.CityInputWrapper>
                <Input03 label="Descrição" name="descricao" type="text" />
                <S.OptionWrapper>
                  <Input04 name="estado" Options={ModuleOptions} />
                </S.OptionWrapper>
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
