/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import Loader from 'react-spinners/ScaleLoader'

import API from '../../../services/API'

import Layout from '../../../components/layout'
import Button02 from '../../../components/buttons/button02'
import DateInput from '../../../components/inputs/date'
import List from '../../../components/list-items'
import Tooltip from '../../../components/tooltip'
import CheckBox from '../../../components/inputs/checkbox'

import * as S from './styles'
import * as F from './filterStyles'

import I from '../../../utils/Icons'

const AttendencesReport = () => {
  const date = new Date()

  const [visible, setVisible] = useState(false)
  const [attendencesData, setAttendencesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [filtered, setFiltered] = useState([])
  const [firstDay, setFirstDay] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
  )
  const [lastDay, setLastDay] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString()
  )
  const [statusAttendence, setStatusAttendence] = useState(false)

  const formRef = useRef(null)

  const sectorID = localStorage.getItem('user-sector-id')
  const userID = localStorage.getItem('user-id')

  useEffect(() => {
    handleCallAPI()
  }, [])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleCallAPI(data) {
    setLoading(true)

    if (sectorID == 1) {
      API.post('/report/index', data).then(res => {
        setAttendencesData(res.data.TotalAttendences)
        setFiltered(res.data.TotalAttendences)
        setLoading(false)
      })
    } else {
      API.post('/report/support', data, {
        headers: { id_usuario: userID }
      }).then(res => {
        setAttendencesData(res.data.TotalAttendences)
        setFiltered(res.data.TotalAttendences)
        setLoading(false)
      })
    }

    if (data && data.initial_date) {
      setFirstDay(data.initial_date.toLocaleDateString())
    } else {
      setFirstDay(
        new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
      )
    }

    if (data && data.finish_date) {
      setLastDay(data.finish_date.toLocaleDateString())
    } else {
      setLastDay(
        new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          0
        ).toLocaleDateString()
      )
    }
  }

  function handleFilterAttendencesPerStatus() {
    setStatusAttendence(!statusAttendence)

    if (statusAttendence) {
      setFiltered(attendencesData)
    } else {
      const dataFiltered = attendencesData.filter(
        item => item.totalAttendences == 0
      )

      setFiltered(dataFiltered)
    }
  }

  function handleFilterData() {
    const dataFiltered = attendencesData.filter(item =>
      item.clientName.toLowerCase().includes(searchInput.toLowerCase())
    )

    setFiltered(dataFiltered)
  }

  return (
    <>
      <Layout
        page="Relatório de atendimentos"
        search={e => setSearchInput(e.target.value)}
        reportParams={() => setVisible(!visible)}
      >
        <S.Wrapper>
          <S.AttendenceContainer visible={visible}>
            {loading ? (
              <S.ContainLoader>
                <Loader loading={loading} size={200} color="#003333" />
              </S.ContainLoader>
            ) : (
              <>
                <S.Container>
                  <S.Title>{`Atendimentos - ${firstDay} a ${lastDay}`}</S.Title>
                </S.Container>
                <S.ContainSubHeader>
                  <S.Description>Cliente</S.Description>
                  <S.Description>Total de atendimentos</S.Description>
                  <S.Description>Histórico</S.Description>
                </S.ContainSubHeader>

                <S.ScrollArea>
                  {filtered.map(item => (
                    <List
                      key={item.clientID}
                      description={item.clientName}
                      description3={item.totalAttendences}
                      onHistoric={() => {}}
                    />
                  ))}
                </S.ScrollArea>
              </>
            )}
          </S.AttendenceContainer>

          <F.FilterContainer visible={visible}>
            <Form
              ref={formRef}
              onSubmit={handleCallAPI}
              style={{ height: '100%' }}
            >
              <F.FilterContent>
                <F.FilterHeader>
                  <F.FilterTitle> Parâmetros para o relatório </F.FilterTitle>
                </F.FilterHeader>

                <F.FilterMain>
                  <DateInput name="initial_date" label="Data Inicial" />
                  <DateInput name="finish_date" label="Data Final" />

                  <CheckBox
                    label="Apenas clientes não atendidos"
                    onChange={() => handleFilterAttendencesPerStatus()}
                  />
                </F.FilterMain>

                <F.FilterFooter>
                  <Button02
                    label="Buscar"
                    icon={I.RiSearchLine}
                    type="submit"
                    bgColor="#5FACBF"
                  />
                </F.FilterFooter>
              </F.FilterContent>
              <Tooltip />
            </Form>
          </F.FilterContainer>
        </S.Wrapper>
      </Layout>
    </>
  )
}

export default AttendencesReport
