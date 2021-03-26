/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Lottie from 'react-lottie'
import Loader from 'react-spinners/ScaleLoader'
import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Filter from '../../components/filter'
import SelectOptions from '../../components/select-options'

import ClientDatails from './client-details'
import ClientTools from './client-tools'
import ClientRegister from './client-register'

import LoadingAnimation from '../../assets/loader.json'

import ToastContainer from '../../components/toastify'

import { DataInfoOptions } from './data'

import * as S from './styles'

const Clients = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [supports, setSupports] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modalTools, setModalTools] = useState(false)
  const [modalDetailVisible, setModalDetailsVisible] = useState(false)
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false)
  const [clientViewData, setClientViewData] = useState({
    nome: '',
    razao_social: '',
    cnpj: '',
    identificador_servidor: '',
    identificador_internews: '',
    quantidade_acessos: '',
    endereco: '',
    responsavel: '',
    contato: '',
    email: '',
    mensalidade: '',
    vencimento_mensalidade: '',
    versao_internews: '',
    atividade: {
      descricao: ''
    },
    cidade: {
      descricao: ''
    },
    suporte: {
      descricao: ''
    },
    ferramentas: []
  })
  const sectorID = localStorage.getItem('user-sector-id')
  const { setDataClientContext } = useClientContext()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation
  }

  useEffect(() => {
    handleCallApi()
  }, [modalRegisterVisible])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleCallApi() {
    setLoading(false)
    api.get('/clients/index').then(res => {
      setData(res.data.clients)
      console.log(res.data.clients)

      // setTotalClients(res.data.count)
      setFiltered(res.data.clients)
      setDataClientContext(res.data.clients)
    })

    api.get('/support/index').then(res => {
      setSupports(res.data)
    })
    setLoading(true)
  }

  function handleClients() {
    setLoading(false)
    api.get('/clients/index').then(res => {
      setData(res.data.clients)
      // setTotalClients(res.data.count)
      setFiltered(res.data.clients)
      setDataClientContext(res.data.clients)
    })
    setLoading(true)
  }

  function handleToggleSupportClients(type) {
    if (type === 0) {
      return handleCallApi()
    }

    const dataFiltered = data.filter(item => item.suporte.id === type)

    setFiltered(dataFiltered)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleFilterData() {
    const dataFiltered = data.filter(item =>
      item.nome.toLowerCase().includes(searchInput.toLowerCase())
    )

    setFiltered(dataFiltered)
  }

  function handleDetails(item) {
    setClientViewData(item)
    setModalDetailsVisible(!modalDetailVisible)
  }

  function toggleTools() {
    setModalDetailsVisible(!modalDetailVisible)
    setModalTools(!modalTools)
  }

  function toggleEdit({ data }) {
    history.push({
      pathname: '/clientes/cadastro/editar',
      state: { data }
    })
  }

  function toggleRegisterVisible() {
    setModalRegisterVisible(!modalRegisterVisible)
  }

  return (
    <Layout
      page="Clientes"
      search={e => setSearchInput(e.target.value)}
      register={() => (sectorID !== '2' ? toggleRegisterVisible() : {})}
    >
      <S.Container>
        <S.OptionsWraper>
          <S.Button onClick={() => handleClients()}>
            <S.Text>Todos</S.Text>
          </S.Button>
          {supports.map(item => (
            <SelectOptions
              key={item.id}
              title={item.descricao}
              handle={() => handleToggleSupportClients(item.id)}
            />
          ))}
        </S.OptionsWraper>
      </S.Container>

      {loading ? (
        data.length <= 0 ? (
          <S.MainWrapper loading>
            <Loader loading={true} color="#003333" />
          </S.MainWrapper>
        ) : (
          <S.MainWrapper>
            <S.DataWrapper>
              <S.ProvidersInfo>
                {DataInfoOptions.map(item => (
                  <S.ProvidersInfoTextTitle key={item.id}>
                    {item.title}
                  </S.ProvidersInfoTextTitle>
                ))}
              </S.ProvidersInfo>

              <S.ContainScrollArea>
                <S.ScrollArea>
                  {filtered.map(item => (
                    <S.ProvidersListWrapper
                      key={item.id}
                      onClick={() => handleDetails(item)}
                    >
                      <S.ProvidersInfoTextMobile>
                        {item.nome}
                      </S.ProvidersInfoTextMobile>
                      <S.ProvidersInfoText>
                        {item.cidade.descricao}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoText>
                        {item.atividade.descricao}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoTextMobileDetails>
                        {item.cnpj}
                      </S.ProvidersInfoTextMobileDetails>
                      <S.ProvidersInfoText>
                        {item.modulo.descricao}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoText>
                        {item.atividade_interna.descricao}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoTextMobileDetails>
                        {item.suporte.descricao}
                      </S.ProvidersInfoTextMobileDetails>
                    </S.ProvidersListWrapper>
                  ))}
                </S.ScrollArea>
              </S.ContainScrollArea>
            </S.DataWrapper>
            <Filter
              toggle={activeFilters}
              onClose={() => setActiveFilters(!activeFilters)}
            />
          </S.MainWrapper>
        )
      ) : (
        <S.AnimationWrapper>
          <Lottie options={defaultOptions} width="15%" height="15%" />
        </S.AnimationWrapper>
      )}

      <ClientDatails
        visible={modalDetailVisible}
        data={clientViewData}
        onClose={() => setModalDetailsVisible(!modalDetailVisible)}
        openTools={() => toggleTools()}
        openEdit={() => toggleEdit({ data: clientViewData })}
      />

      <ClientTools
        visible={modalTools}
        data={clientViewData}
        onClose={() => toggleTools()}
      />

      <ClientRegister
        visible={modalRegisterVisible}
        onClose={() => toggleRegisterVisible()}
      />

      <ToastContainer />
    </Layout>
  )
}

export default Clients
