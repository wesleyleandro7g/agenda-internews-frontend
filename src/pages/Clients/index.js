/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import api from '../../services/API'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Filter from '../../components/filter'

import LoadingAnimation from '../../assets/loader.json'

// import I from '../../utils/Icons'

import { DataInfoOptions } from './data'

import * as S from './styles'

const Clients = () => {
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [loading, setLoading] = useState(true)
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
    handleFilterData()
  }, [searchInput])

  function handleCallApi() {
    setLoading(false)
    api.get('/clients/list', { headers: { id_usuario: userID } }).then(res => {
      setData(res.data)
      setFiltered(res.data)
    })
    setLoading(true)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleFilterData() {
    const dataFiltered = data.filter(item =>
      item.razao_social.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  return (
    <Layout page="Clientes">
      <S.Container>
        <S.SubHeader>
          <h5>Total de clientes: 5</h5>
          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
            {/* <I.RiFilter2Line
              onClick={() => setActiveFilters(!activeFilters)}
              cursor="pointer"
            /> */}
          </S.ItemsRigthSubHeader>
        </S.SubHeader>
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
                  <S.ProvidersListWrapper key={item.id}>
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
    </Layout>
  )
}

export default Clients
