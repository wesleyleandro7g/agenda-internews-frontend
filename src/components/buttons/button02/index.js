import React from 'react'

import * as S from './styles'

const Button02 = ({ label, icon, onClick, bgColor = '#FFF' }) => {
  const Icon = icon

  return (
    <S.Container onClick={onClick} bgColor={bgColor}>
      <Icon />
      <S.Text> {label} </S.Text>
    </S.Container>
  )
}

export default Button02
