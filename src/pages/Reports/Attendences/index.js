/* eslint-disable multiline-ternary */
import React, { useState, useRef } from 'react'
import { Form } from '@unform/web'

import API from '../../../services/API'

import Layout from '../../../components/layout'
import Modal from '../../../components/modal'
import CircleBtn from '../../../components/buttons/circle-button'
import Button02 from '../../../components/buttons/button02'
import DateInput from '../../../components/inputs/date'
import List from '../../../components/list-items'
import Tooltip from '../../../components/tooltip'

import * as S from './styles'
import * as M from './modalStyles'

import I from '../../../utils/Icons'

const AttendencesReport = () => {
  const [visible, setVisible] = useState(false)
  const [attendencesData, setAttendencesData] = useState([])
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  function handleFilters(data) {
    setLoading(true)
    API.post('/report/index', data).then(res => {
      setAttendencesData(res.data.unattendedCostumer)
      setLoading(false)
    })

    setVisible(!visible)
  }

  return (
    <>
      <Layout
        page="Relatório de atendimentos"
        reportParams={() => setVisible(!visible)}
      >
        {loading ? (
          <S.Container>
            <h4>Carregando...</h4>
          </S.Container>
        ) : (
          <S.Container>
            <S.ContainSubHeader>
              <S.Title>Cliente</S.Title>
            </S.ContainSubHeader>

            {attendencesData.map((item, index) => (
              <List key={index} description={item.nome} />
            ))}
          </S.Container>
        )}
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
