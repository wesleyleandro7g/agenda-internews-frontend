import React from 'react'

import * as S from './styles'

const HandleFields = ({ name }) => {
  return (
    <S.FilterItemContent>
      <S.TextInput> {name} </S.TextInput>
      <S.InputWrapper>
        <S.InputElement />
        <S.FilterButton>T</S.FilterButton>
      </S.InputWrapper>
    </S.FilterItemContent>
  )
}

const FilterProvider = ({ toggle, onClose }) => {
  return (
    <S.FilterWrapper toggle={toggle}>
      <S.FilterMain toggle={toggle}>
        <S.FilterHeader>
          <S.TextFilter>Filtros</S.TextFilter>
          <S.RiCloseLine onClick={onClose} />
        </S.FilterHeader>
        <S.ScrollArea>
          <HandleFields name="Código alternativo" />
          <HandleFields name="Código no InterNews" />
          <HandleFields name="CNPJ" />
          <HandleFields name="Cidade" />
          <HandleFields name="Ramo de atividade" />
        </S.ScrollArea>
      </S.FilterMain>
    </S.FilterWrapper>
  )
}

export default FilterProvider
