import React, { useRef } from 'react'
import { Form } from '@unform/web'
// import * as Yup from 'yup'

import Layout from '../../components/layout'
import Input03 from '../../components/inputs/input03'
import Input04 from '../../components/inputs/input04'
import Button01 from '../../components/buttons/button01'

import { InputsClientData, ModuleOptions } from './data'

import * as S from './styles'

const Registrations = () => {
  const formRef = useRef(null)

  return (
    <Layout page="Cadastros">
      <S.ScrollArea speed={0.6}>
        <Form ref={formRef}>
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
                <Input04 Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Ramo de atividade</S.TitleInputOptions>
                <Input04 Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Suporte responsável</S.TitleInputOptions>
                <Input04 Options={ModuleOptions} />
              </S.OptionWrapper>

              <S.OptionWrapper>
                <S.TitleInputOptions>Cidade</S.TitleInputOptions>
                <Input04 Options={ModuleOptions} />
              </S.OptionWrapper>
            </S.ScopeWrapper>

            <S.RegisterButtonWrapper>
              <Button01 label="Cadastrar" bgColor="#79D279" />
            </S.RegisterButtonWrapper>
          </S.Content>
        </Form>

        <S.ContentGrig>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Motivo de abertura</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="motivo_abertura" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Motivo de fechamento</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="motivo_fechamento" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Ferramenta</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="ferramenta" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Ramo de atividade</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="ramo_atividade" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Cidade</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="cidade" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
          <Form>
            <S.ContentSimple>
              <S.ContentHeader>
                <h6>Sistema concorrente</h6>
              </S.ContentHeader>
              <Input03 label="Descrição" name="concorrente" type="text" />

              <S.RegisterButtonWrapper>
                <Button01 label="Cadastrar" bgColor="#79D279" />
              </S.RegisterButtonWrapper>
            </S.ContentSimple>
          </Form>
        </S.ContentGrig>
      </S.ScrollArea>
    </Layout>
  )
}

export default Registrations
