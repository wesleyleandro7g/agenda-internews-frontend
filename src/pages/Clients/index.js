import React, { useState, useEffect } from 'react'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Filter from '../../components/filter'

import I from '../../utils/Icons'

import { DataTemp } from './dataTemp'
import { DataInfoOptions } from './data'

import * as S from './styles'

const Clients = () => {
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleFilterData() {
    const dataFiltered = DataTemp.filter(item =>
      item.nome.toLowerCase().includes(searchInput)
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
            <I.RiFilter2Line
              onClick={() => setActiveFilters(!activeFilters)}
              cursor="pointer"
            />
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
              <S.ProvidersListWrapper key={item.id}>
                <S.ProvidersInfoText> {item.nome} </S.ProvidersInfoText>
                <S.ProvidersInfoText> {item.cidade} </S.ProvidersInfoText>
                <S.ProvidersInfoText>{item.ramo_atividade}</S.ProvidersInfoText>
                <S.ProvidersInfoText> {item.cnpj} </S.ProvidersInfoText>
                <S.ProvidersInfoText>
                  {item.codigo_internews}
                </S.ProvidersInfoText>
                <S.ProvidersInfoText>
                  {item.codigo_alternativo}
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
    </Layout>
  )
}

export default Clients
