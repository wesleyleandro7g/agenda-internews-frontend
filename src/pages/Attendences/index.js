/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect, createContext } from 'react'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Button02 from '../../components/buttons/button02'

import OpenNewAttendence from './OpenNewAttendence'
import RepassAttendence from './RepassAttendence'
import DetailsAttendence from './DetailsAttendence'
import ScheduleAttendence from './ScheduleAttendence'
import CloseAttendence from './CloseAttendence'

import I from '../../utils/Icons'

import { DataTemp } from './dataTemp'
import { DataInfoOptions } from './data'

import * as S from './styles'

const ClientContext = createContext()

const Attendences = () => {
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false)
  const [modalCloseVisible, setModalCloseVisible] = useState(false)
  const [modalScheduledVisible, setModalScheduledVisible] = useState(false)
  const [modalRepassVisible, setModalRepassVisible] = useState(false)
  const [attendenceDataTemp, setAttendenceDataTemp] = useState({})
  const [newAttendenceVisible, setNewAttendenceVisible] = useState(false)
  const { dataClientContext, setDataClientContext } = useClientContext()

  const userID = localStorage.getItem('user-id')

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  async function handleCallApi() {
    api.get('/clients/list', { headers: { id_usuario: userID } }).then(res => {
      setDataClientContext(res.data)
    })
  }

  function handleFilterData() {
    const dataFiltered = DataTemp.filter(item =>
      item.empresa.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handlePreviewAttendence(item) {
    setAttendenceDataTemp(item)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalCloseAndDetailsAttendence() {
    setModalCloseVisible(!modalCloseVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalSchuledAndDetailsAttendence() {
    setModalScheduledVisible(!modalScheduledVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalRepassAndDetailsAttedence() {
    setModalRepassVisible(!modalRepassVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  return (
    <ClientContext.Provider value={dataClientContext}>
      <Layout page="Atendimentos">
        <S.Container>
          <S.SubHeader>
            <S.ItemsLeftSubHeader>
              <Button02
                label="Abrir atendimento"
                icon={I.RiAddCircleLine}
                onClick={() => setNewAttendenceVisible(!newAttendenceVisible)}
              />
              <h5>Total de atendimentos: 5</h5>
            </S.ItemsLeftSubHeader>

            <S.ItemsRigthSubHeader>
              <Search onChange={e => setSearchInput(e.target.value)} />
            </S.ItemsRigthSubHeader>
          </S.SubHeader>
        </S.Container>

        <S.MainWrapper>
          <S.DataWrapper>
            <S.ProvidersInfo>
              {DataInfoOptions.map(item => (
                <S.ProvidersInfoText key={item.id}>
                  {item.title}
                </S.ProvidersInfoText>
              ))}
            </S.ProvidersInfo>

            <S.ScrollArea speed={0.6}>
              {filtered.map(item => (
                <S.ProvidersListWrapper
                  key={item.id}
                  onClick={() => handlePreviewAttendence(item)}
                >
                  <S.ProvidersInfoText> {item.empresa} </S.ProvidersInfoText>
                  <S.ProvidersInfoText>
                    {item.nome_solicitante}
                  </S.ProvidersInfoText>
                  <S.ProvidersInfoText>
                    {item.contato_solicitante}
                  </S.ProvidersInfoText>
                  <S.ProvidersInfoText>{item.id_abertura}</S.ProvidersInfoText>
                  <S.ProvidersInfoText>{item.status}</S.ProvidersInfoText>
                </S.ProvidersListWrapper>
              ))}
            </S.ScrollArea>
          </S.DataWrapper>
        </S.MainWrapper>

        <DetailsAttendence
          attendenceDataTemp={attendenceDataTemp}
          modalDetailsVisible={modalDetailsVisible}
          closeModal={() => setModalDetailsVisible(!modalDetailsVisible)}
          openAttendence={() => setModalDetailsVisible(!modalDetailsVisible)}
          closeAttendence={() => toggleModalCloseAndDetailsAttendence()}
          scheduleAttendence={() => toggleModalSchuledAndDetailsAttendence()}
          repassAttendence={() => toggleModalRepassAndDetailsAttedence()}
        />

        <CloseAttendence
          modalCloseVisible={modalCloseVisible}
          clientName={attendenceDataTemp.empresa}
          closeModal={() => toggleModalCloseAndDetailsAttendence()}
        />

        <ScheduleAttendence
          modalScheduledVisible={modalScheduledVisible}
          clientName={attendenceDataTemp.empresa}
          closeModal={() => toggleModalSchuledAndDetailsAttendence()}
        />

        <RepassAttendence
          modalRepassVisible={modalRepassVisible}
          clientName={attendenceDataTemp.empresa}
          closeModal={() => toggleModalRepassAndDetailsAttedence()}
        />

        <OpenNewAttendence
          newAttendenceVisible={newAttendenceVisible}
          cancelable={() => setNewAttendenceVisible(!newAttendenceVisible)}
        />
      </Layout>
    </ClientContext.Provider>
  )
}

export default Attendences
