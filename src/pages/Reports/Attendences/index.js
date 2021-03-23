import React, { useState, useRef } from 'react'
import { Form } from '@unform/web'

import Layout from '../../../components/layout'
import Modal from '../../../components/modal'
import CircleBtn from '../../../components/buttons/circle-button'
import Button02 from '../../../components/buttons/button02'
import DateInput from '../../../components/inputs/date'
import Tooltip from '../../../components/tooltip'

import * as S from './styles'
import * as M from './modalStyles'

import I from '../../../utils/Icons'

const AttendencesReport = () => {
  const [visible, setVisible] = useState(false)
  const formRef = useRef(null)

  function handleFilters(data) {
    console.log(data)
  }

  return (
    <>
      <Layout
        page="Relatório de Clientes não Atendidos"
        reportParams={() => setVisible(!visible)}
      >
        <S.Container>
          <h1>Relatório</h1>
        </S.Container>
      </Layout>

      <Form ref={formRef} onSubmit={handleFilters}>
        <Modal visible={visible}>
          <M.ModalContainer>
            <M.ModalHeader>
              <M.ModalTitle> Parâmetros para o relatório </M.ModalTitle>
              <CircleBtn
                icon={I.RiCloseLine}
                onClick={() => setVisible(!visible)}
                dataTip="Fechar"
                dataDelayShow={1000}
              />
            </M.ModalHeader>

            <M.ModalMain>
              <DateInput name="initial_date" label="Data Inicial" />
              <DateInput name="finish_date" label="Data Final" />
            </M.ModalMain>

            <M.ModalFooter>
              <Button02 label="Buscar" icon={I.RiSearchLine} type="submit" />
            </M.ModalFooter>
          </M.ModalContainer>
          <Tooltip />
        </Modal>
      </Form>
    </>
  )
}

export default AttendencesReport
