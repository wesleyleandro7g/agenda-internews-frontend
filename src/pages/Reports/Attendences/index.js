/* eslint-disable eqeqeq */
/* eslint-disable multiline-ternary */
import React, { useState, useRef } from 'react'
import { Form } from '@unform/web'
import Loader from 'react-spinners/ScaleLoader'

import API from '../../../services/API'

import Layout from '../../../components/layout'
import Modal from '../../../components/modal'
import Button02 from '../../../components/buttons/button02'
import DateInput from '../../../components/inputs/date'
import List from '../../../components/list-items'
import Tooltip from '../../../components/tooltip'
import CheckBox from '../../../components/inputs/checkbox'

import * as S from './styles'
import * as M from './modalStyles'

import I from '../../../utils/Icons'

const AttendencesReport = () => {
  const [visible, setVisible] = useState(false)
  const [attendencesData, setAttendencesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [statusAttendenceClients, setStatusAttendenceClients] = useState(
    '-served'
  )
  const formRef = useRef(null)

  const sectorID = localStorage.getItem('user-sector-id')
  const userID = localStorage.getItem('user-id')

  function handleFilters(data) {
    setLoading(true)

    if (sectorID == 1) {
      API.post(`/report/index${statusAttendenceClients}`, data).then(res => {
        setAttendencesData(res.data.unattendedCostumer)
        setLoading(false)
      })
    } else {
      API.post(`/report/support${statusAttendenceClients}`, data, {
        headers: { id_usuario: userID }
      }).then(res => {
        setAttendencesData(res.data.unattendedCostumer)
        console.log(res.data)
        setLoading(false)
      })
    }

    setVisible(!visible)
  }

  return (
    <>
      <Layout
        page="Relatório de atendimentos"
        reportParams={() => setVisible(!visible)}
      >
        {loading ? (
          <S.ContainLoader>
            <Loader loading={loading} size={200} color="#003333" />
          </S.ContainLoader>
        ) : (
          <>
            <S.ContainSubHeader>
              <S.Title>Cliente</S.Title>
            </S.ContainSubHeader>

            <S.ScrollArea>
              {attendencesData.map((item, index) => (
                <List key={index} description={item.nome} />
              ))}
            </S.ScrollArea>
          </>
        )}
      </Layout>

      <Form ref={formRef} onSubmit={handleFilters}>
        <Modal visible={visible}>
          <M.ModalContainer>
            <M.ModalHeader>
              <M.ModalTitle> Parâmetros para o relatório </M.ModalTitle>
            </M.ModalHeader>

            <M.ModalMain>
              <DateInput name="initial_date" label="Data Inicial" />
              <DateInput name="finish_date" label="Data Final" />

              <CheckBox
                label="Clientes não atendidos"
                onChange={() =>
                  setStatusAttendenceClients(
                    statusAttendenceClients ? '' : '-served'
                  )
                }
              />
            </M.ModalMain>

            <M.ModalFooter>
              <Button02
                label="Buscar"
                icon={I.RiSearchLine}
                type="submit"
                bgColor="#5FACBF"
              />
            </M.ModalFooter>
          </M.ModalContainer>
          <Tooltip />
        </Modal>
      </Form>
    </>
  )
}

export default AttendencesReport
