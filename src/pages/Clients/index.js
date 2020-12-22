/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Filter from '../../components/filter'
import SelectOptions from '../../components/select-options'
import ClientDatils from './client-details'

import LoadingAnimation from '../../assets/loader.json'

// import I from '../../utils/Icons'

import { DataInfoOptions } from './data'

import * as S from './styles'

const Clients = () => {
  const [data, setData] = useState([])
  const [supports, setSupports] = useState([])
  const [totalClients, setTotalClients] = useState('')
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [loading, setLoading] = useState(true)
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
      item.razao_social.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handleDetails(item) {
    setClientViewData(item)
    setModalDetailsVisible(!modalDetailVisible)
  }

  return (
    <Layout page="Clientes">
      <S.Container>
        <S.SubHeader>
          <h5>Total de clientes: {totalClients}</h5>
          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
            {/* <I.RiFilter2Line
              onClick={() => setActiveFilters(!activeFilters)}
              cursor="pointer"
            /> */}
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

              <S.ScrollArea speed={0.6}>
                {filtered.map(item => (
                  <S.ProvidersListWrapper
                    key={item.id}
                    onClick={() => handleDetails(item)}
                  >
                    <S.ProvidersInfoText>
                      {item.razao_social}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.cidade.descricao}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.atividade.descricao}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText> {item.cnpj} </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.identificador_internews}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.identificador_servidor}
                    </S.ProvidersInfoText>
                    <S.ProvidersInfoText>
                      {item.suporte.nome}
                    </S.ProvidersInfoText>
                  </S.ProvidersListWrapper>
                ))}
              </S.ScrollArea>
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
      <ClientDatils
        visible={modalDetailVisible}
        data={clientViewData}
        onClose={() => setModalDetailsVisible(!modalDetailVisible)}
      />
    </Layout>
  )
}

export default Clients
