import React from 'react'

import * as S from './styles'

const ShowInfo = ({ title, value }) => {
  return (
    <S.Container>
      <S.Title> {title} </S.Title>
      <S.Contain>
        <S.Description> {value} </S.Description>
      </S.Contain>
    </S.Container>
  )
}

export default ShowInfo
