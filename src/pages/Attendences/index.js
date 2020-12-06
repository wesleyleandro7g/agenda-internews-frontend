/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Button02 from '../../components/buttons/button02'

import LoadingAnimation from '../../assets/loader.json'

import OpenNewAttendence from './OpenNewAttendence'
import RepassAttendence from './RepassAttendence'
import DetailsAttendence from './DetailsAttendence'
import ScheduleAttendence from './ScheduleAttendence'
import CloseAttendence from './CloseAttendence'

import I from '../../utils/Icons'

import { DataInfoOptions } from './data'

import * as S from './styles'

const Attendences = () => {
  const [attendenceData, setAttendenceData] = useState([])
  const [totalAttendences, setTotalAttendeces] = useState('')
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false)
  const [modalCloseVisible, setModalCloseVisible] = useState(false)
  const [modalScheduledVisible, setModalScheduledVisible] = useState(false)
  const [modalRepassVisible, setModalRepassVisible] = useState(false)
  const [attendenceDataTemp, setAttendenceDataTemp] = useState({})
  const [newAttendenceVisible, setNewAttendenceVisible] = useState(false)
  const { dataClientContext, setDataClientContext } = useClientContext()

  const userID = localStorage.getItem('user-id')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation
  }

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleCallApi()
  }, [newAttendenceVisible])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  async function handleCallApi() {
    setLoading(false)
    api
      .get('/attendence/index', { headers: { id_usuario: userID } })
      .then(res => {
        setAttendenceData(res.data.attendences)
        setFiltered(res.data.attendences)
        setTotalAttendeces(res.data.count)
      })

    api.get('/clients/list', { headers: { id_usuario: userID } }).then(res => {
      setDataClientContext(res.data.clients)
    })
    setLoading(true)
  }

  function handleFilterData() {
    const dataFiltered = attendenceData.filter(item =>
      item.cliente.razao_social.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handlePreviewAttendence(item) {
    setAttendenceDataTemp(item)
    console.log(item.cliente.razao_social)
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
    <Layout page="Atendimentos">
      <S.Container>
        <S.SubHeader>
          <S.ItemsLeftSubHeader>
            <Button02
              label="Abrir atendimento"
              icon={I.RiAddCircleLine}
              onClick={() => setNewAttendenceVisible(!newAttendenceVisible)}
            />
            <h5>Total de atendimentos: {totalAttendences} </h5>
          </S.ItemsLeftSubHeader>

          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
          </S.ItemsRigthSubHeader>
        </S.SubHeader>
      </S.Container>

      {loading ? (
        attendenceData.length <= 0 ? (
          <S.MainWrapper>
            <h3>Sem registros</h3>
          </S.MainWrapper>
        ) : (
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
                    <S.ProvidersInfoText>
                      {item.cliente.razao_social}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.nome_solicitante}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.contato_solicitante}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.abertura.descricao}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>{item.status}</S.ProvidersInfoText>
                  </S.ProvidersListWrapper>
                ))}
              </S.ScrollArea>
            </S.DataWrapper>
          </S.MainWrapper>
        )
      ) : (
        <S.AnimationWrapper>
          <Lottie options={defaultOptions} width="15%" height="15%" />
        </S.AnimationWrapper>
      )}

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
        dataClient={dataClientContext}
        finish={() => setNewAttendenceVisible(!newAttendenceVisible)}
      />
    </Layout>
  )
}

export default Attendences
