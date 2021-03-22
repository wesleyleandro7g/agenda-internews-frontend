import React from 'react'

import * as S from './styles'

const Button03 = ({ title, icon, onClick }) => {
  const Icon = icon

  return (
    <S.Container onClick={onClick}>
      <Icon size={120} color="#fff" />

      <S.Content>
        <S.Title> {title} </S.Title>
      </S.Content>
    </S.Container>
  )
}

export default Button03
