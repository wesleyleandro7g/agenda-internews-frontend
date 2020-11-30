import React from 'react'

import * as S from './styles'

const Button01 = ({ label, onClick, bgColor }) => {
  return (
    <S.Container bgColor={bgColor} onClick={onClick}>
      <S.Text> {label} </S.Text>
    </S.Container>
  )
}

export default Button01
