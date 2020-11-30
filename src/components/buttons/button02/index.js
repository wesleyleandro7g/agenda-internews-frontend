import React from 'react'

import * as S from './styles'

const Button02 = ({ label, icon, onClick }) => {
  const Icon = icon

  return (
    <S.Container onClick={onClick}>
      <Icon />
      <S.Text> {label} </S.Text>
    </S.Container>
  )
}

export default Button02
