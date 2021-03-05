/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Lottie from 'react-lottie'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Filter from '../../components/filter'
import SelectOptions from '../../components/select-options'

import ClientDatails from './client-details'
import ClientTools from './client-tools'

import LoadingAnimation from '../../assets/loader.json'

// import I from '../../utils/Icons'

import { DataInfoOptions } from './data'

import * as S from './styles'

const Clients = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [supports, setSupports] = useState([])
  const [totalClients, setTotalClients] = useState('')
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modalTools, setModalTools] = useState(false)
  const [modalDetailVisible, setModalDetailsVisible] = useState(false)
  const [clientViewData, setClientViewData] = useState({
    razao_social: '',
    cnpj: '',
    identificador_servidor: '',
    identificador_internews: '',
    quantidade_acessos: '',
    endereco: '',
    atividade: {
      descricao: ''
    },
    cidade: {
      descricao: ''
    },
    suporte: {
      nome: ''
    },
    ferramentas: []
  })
  const { setDataClientContext } = useClientContext()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation
  }

  useEffect(() => {
    handleCallApi()
  }, [])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleCallApi() {
    setLoading(false)
    api.get('/clients/index').then(res => {
      setData(res.data.clients)
      setTotalClients(res.data.count)
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
      setTotalClients(res.data.count)
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
      item.razao_social.toLowerCase().includes(searchInput.toLowerCase())
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

  return (
    <Layout page="Clientes" search={e => setSearchInput(e.target.value)}>
      <S.Container>
        <S.SubHeader>
          <S.TextTotalClients>
            Total de clientes: {totalClients}
          </S.TextTotalClients>
          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
          </S.ItemsRigthSubHeader>
        </S.SubHeader>

        <S.OptionsWraper>
          <S.Button onClick={() => handleClients()}>
            <S.Text>Todos</S.Text>
          </S.Button>
          {supports.map(item => (
            <SelectOptions
              key={item.id}
              title={item.nome}
              handle={() => handleToggleSupportClients(item.id)}
            />
          ))}
        </S.OptionsWraper>
      </S.Container>

      {loading ? (
        data.length <= 0 ? (
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

              <S.ContainScrollArea>
                <S.ScrollArea>
                  {filtered.map(item => (
                    <S.ProvidersListWrapper
                      key={item.id}
                      onClick={() => handleDetails(item)}
                    >
                      <S.ProvidersInfoTextMobile>
                        {item.razao_social}
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
                        {item.identificador_internews}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoText>
                        {item.identificador_servidor}
                      </S.ProvidersInfoText>
                      <S.ProvidersInfoTextMobileDetails>
                        {item.suporte.nome}
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
    </Layout>
  )
}

export default Clients
