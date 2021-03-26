/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Loader from 'react-spinners/ScaleLoader'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Fab from '../../components/buttons/fab'
import SelectOptions from '../../components/select-options'
import LivelyAnimated from '../../components/lively-animated'
import Tooltip from '../../components/tooltip'

import OpenNewAttendence from './OpenNewAttendence'
import RepassAttendence from './RepassAttendence'
import DetailsAttendence from './DetailsAttendence'
import ScheduleAttendence from './ScheduleAttendence'
import CloseAttendence from './CloseAttendence'

import ToastContainer, {
  notifySuccess,
  notifyError
} from '../../components/toastify'

import I from '../../utils/Icons'
import { convertDate } from '../../utils/ConvetData'

import { DataInfoOptions, StatusAttendence } from './data'

import * as S from './styles'

const Attendences = () => {
  const [attendenceData, setAttendenceData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false)
  const [modalCloseVisible, setModalCloseVisible] = useState(false)
  const [modalScheduledVisible, setModalScheduledVisible] = useState(false)
  const [modalRepassVisible, setModalRepassVisible] = useState(false)
  const [attendenceDataTemp, setAttendenceDataTemp] = useState({})
  const [newAttendenceVisible, setNewAttendenceVisible] = useState(false)
  const { dataClientContext, setDataClientContext } = useClientContext()

  const userID = localStorage.getItem('user-id')
  const sectorID = localStorage.getItem('user-sector-id')

  const TIME_FOR_NEW_CALL_API = 100000

  useEffect(() => {
    if (sectorID == 1 || sectorID == 2) {
      handleCallApiManager()
    } else {
      handleCallApi()
    }
  }, [])

  useEffect(() => {
    if (sectorID == 1 || sectorID == 2) {
      handleCallApiManager()
    } else {
      handleCallApi()
    }
  }, [newAttendenceVisible, modalRepassVisible, modalCloseVisible])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  useEffect(() => {
    setInterval(() => {
      if (sectorID == 1 || sectorID == 2) {
        handleCallApiManager()
      } else {
        handleCallApi()
      }
    }, TIME_FOR_NEW_CALL_API)
  }, [])

  function handleRefresh() {
    if (sectorID == 1 || sectorID == 2) {
      handleCallApiManager()
    } else {
      handleCallApi()
    }
  }

  async function handleCallApi() {
    setLoading(false)

    api
      .get('/attendence/index/support', {
        headers: { id_usuario: userID }
      })
      .then(res => {
        setAttendenceData(res.data.attendences)
        setFiltered(res.data.attendences)

        setLoading(true)
      })

    api.get('/clients/index').then(res => {
      setDataClientContext(res.data.clients)
    })
  }

  function handleAttendences() {
    if (sectorID == 1 || sectorID == 2) {
      api.get('/attendence/index/index').then(res => {
        setAttendenceData(res.data.attendences)
        setFiltered(res.data.attendences)
      })
    } else {
      api
        .get('/attendence/index/support', {
          headers: { id_usuario: userID }
        })
        .then(res => {
          setAttendenceData(res.data.attendences)
          setFiltered(res.data.attendences)
        })
    }
  }

  function handleClosedAttendences() {
    if (sectorID == 1 || sectorID == 2) {
      api.get('/attendence/index/closed').then(res => {
        setAttendenceData(res.data.attendences)
        setFiltered(res.data.attendences)
      })
    } else {
      api
        .get('/attendence/index/support-closed', {
          headers: { id_usuario: userID }
        })
        .then(res => {
          setAttendenceData(res.data.attendences)
          setFiltered(res.data.attendences)
        })
    }
  }

  // Manager Call API
  async function handleCallApiManager() {
    setLoading(false)

    api.get('/attendence/index/index').then(res => {
      setAttendenceData(res.data.attendences)
      setFiltered(res.data.attendences)
    })

    api.get('/clients/index').then(res => {
      setDataClientContext(res.data.clients)
    })

    setLoading(true)
  }

  function handleFilterData() {
    const dataFiltered = attendenceData.filter(item =>
      item.cliente.nome.toLowerCase().includes(searchInput.toLowerCase())
    )

    setFiltered(dataFiltered)
  }

  function handleToggleStatusAttendences(type) {
    const dataFiltered = attendenceData.filter(item => item.status.id === type)

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

  function toggleModalOnRepassedAttendence() {
    setModalRepassVisible(!modalRepassVisible)
  }

  function openAttendence(id) {
    api
      .put('/attendence/update/open', { id })
      .then(res => {
        notifySuccess(res.data.message)
      })
      .catch(err => notifyError(err))

    handleCallApi()

    setModalDetailsVisible(!modalDetailsVisible)
  }

  return (
    <Layout
      page="Atendimentos"
      search={e => setSearchInput(e.target.value)}
      register={() => setNewAttendenceVisible(!newAttendenceVisible)}
      attendenceRefresh={() => handleRefresh()}
    >
      <S.Container>
        <S.OptionsWraper>
          <S.Button onClick={() => handleAttendences()}>
            <S.TextFilter
              data-tip="Atendimentos não finalizados"
              data-delay-show={1000}
            >
              Todos
            </S.TextFilter>
          </S.Button>
          {StatusAttendence.map(item => (
            <SelectOptions
              key={item.id}
              title={item.label}
              handle={() => handleToggleStatusAttendences(item.id)}
            />
          ))}
          <S.Button onClick={() => handleClosedAttendences()}>
            <S.TextFilter
              data-tip="Atendimentos finalizados"
              data-delay-show={1000}
            >
              Finalizados
            </S.TextFilter>
          </S.Button>
        </S.OptionsWraper>
      </S.Container>

      {loading ? (
        attendenceData.length <= 0 ? (
          <S.Main>
            <LivelyAnimated />
          </S.Main>
        ) : (
          <S.Main>
            <S.DataWrapper>
              <S.Info>
                {DataInfoOptions.map(item => (
                  <S.InfoTitle key={item.id}>{item.title}</S.InfoTitle>
                ))}
              </S.Info>
              <S.ContainScrollArea>
                <S.ScrollArea>
                  {filtered.map(item => (
                    <S.ListWrapper
                      key={item.id}
                      onClick={() => handlePreviewAttendence(item)}
                      statusBorder={item.status.id}
                    >
                      <S.TextMobile>{item.cliente.nome}</S.TextMobile>
                      <S.TextMobileDetails>
                        {item.nome_solicitante}
                      </S.TextMobileDetails>
                      <S.TextMobileDetails>
                        {item.contato_solicitante}
                      </S.TextMobileDetails>
                      <S.TextMobileDetails>
                        {item.abertura.descricao}
                      </S.TextMobileDetails>
                      <S.StatusContent status={item.status.descricao}>
                        <S.Text>{item.status.descricao}</S.Text>
                      </S.StatusContent>
                      <S.TextMobileDetails>
                        {convertDate(item.createdAt)}
                      </S.TextMobileDetails>
                    </S.ListWrapper>
                  ))}
                </S.ScrollArea>
              </S.ContainScrollArea>
            </S.DataWrapper>
          </S.Main>
        )
      ) : (
        <S.Main loading>
          <Loader loading={true} color="#003333" />
        </S.Main>
      )}

      <DetailsAttendence
        attendenceDataTemp={attendenceDataTemp}
        modalDetailsVisible={modalDetailsVisible}
        closeModal={() => setModalDetailsVisible(!modalDetailsVisible)}
        openAttendence={() => openAttendence(attendenceDataTemp.id)}
        closeAttendence={() => toggleModalCloseAndDetailsAttendence()}
        scheduleAttendence={() => toggleModalSchuledAndDetailsAttendence()}
        repassAttendence={() => toggleModalRepassAndDetailsAttedence()}
      />

      <CloseAttendence
        modalCloseVisible={modalCloseVisible}
        attendenceID={attendenceDataTemp.id}
        clientName={
          attendenceDataTemp.cliente && attendenceDataTemp.cliente.nome
        }
        closeModal={() => toggleModalCloseAndDetailsAttendence()}
        finish={() => setModalCloseVisible(!modalCloseVisible)}
      />

      <ScheduleAttendence
        modalScheduledVisible={modalScheduledVisible}
        clientName={
          attendenceDataTemp.cliente && attendenceDataTemp.cliente.nome
        }
        closeModal={() => toggleModalSchuledAndDetailsAttendence()}
      />

      <RepassAttendence
        modalRepassVisible={modalRepassVisible}
        clientName={
          attendenceDataTemp.cliente && attendenceDataTemp.cliente.nome
        }
        attendenceID={attendenceDataTemp.id}
        closeModal={() => toggleModalRepassAndDetailsAttedence()}
        repassed={() => toggleModalOnRepassedAttendence()}
      />

      <OpenNewAttendence
        newAttendenceVisible={newAttendenceVisible}
        cancelable={() => setNewAttendenceVisible(!newAttendenceVisible)}
        dataClient={dataClientContext}
        finish={() => setNewAttendenceVisible(!newAttendenceVisible)}
      />

      <Fab
        icon={I.RiAddLine}
        onClick={() => setNewAttendenceVisible(!newAttendenceVisible)}
      />

      <ToastContainer />
      <Tooltip />
    </Layout>
  )
}

export default Attendences
