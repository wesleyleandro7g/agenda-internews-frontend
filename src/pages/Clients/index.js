/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Loader from 'react-spinners/ScaleLoader'

import api from '../../services/API'

import { useClientContext } from '../../context/ClientContext'

import Layout from '../../components/layout'
import Filter from '../../components/filter'
import SelectOptions from '../../components/select-options'
import ClientDatails from './client-details'
import ClientTools from './client-tools'
import ClientRegister from './client-register'
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
  const { dataClientContext, setDataClientContext } = useClientContext()

  useEffect(() => {
    setLoading(false)
    handleCallApi()
  }, [modalRegisterVisible])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleCallApi() {
    api.get('/clients/index').then(res => {
      setData(res.data.clients)
      setFiltered(res.data.clients)
      setDataClientContext(res.data.clients)

      setLoading(true)
    })

    api.get('/support/index').then(res => {
      setSupports(res.data)
    })
  }

  function handleClients() {
    setData(dataClientContext)
    setFiltered(dataClientContext)
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
            <S.TextFilter>Todos</S.TextFilter>
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
          <S.Main loading>
            <h6> Sem registros </h6>
          </S.Main>
        ) : (
          <S.Main>
            <S.DataWrapper>
              <S.ProvidersInfo>
                {DataInfoOptions.map(item => (
                  <S.TextTitle key={item.id}>{item.title}</S.TextTitle>
                ))}
              </S.ProvidersInfo>

              <S.ContainScrollArea>
                <S.ScrollArea>
                  {filtered.map(item => (
                    <S.ListWrapper
                      key={item.id}
                      onClick={() => handleDetails(item)}
                    >
                      <S.TextMobile>{item.nome}</S.TextMobile>
                      <S.Text>{item.cidade.descricao}</S.Text>
                      <S.Text>{item.atividade.descricao}</S.Text>
                      <S.TextMobileDetails>{item.cnpj}</S.TextMobileDetails>
                      <S.Text>{item.modulo.descricao}</S.Text>
                      <S.Text>{item.atividade_interna.descricao}</S.Text>
                      <S.TextMobileDetails>
                        {item.suporte.descricao}
                      </S.TextMobileDetails>
                    </S.ListWrapper>
                  ))}
                </S.ScrollArea>
              </S.ContainScrollArea>
            </S.DataWrapper>
            <Filter
              toggle={activeFilters}
              onClose={() => setActiveFilters(!activeFilters)}
            />
          </S.Main>
        )
      ) : (
        <S.Main loading>
          <Loader loading={true} color="#003333" />
        </S.Main>
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
