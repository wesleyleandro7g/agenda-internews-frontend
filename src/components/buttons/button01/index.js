import React from 'react'

import * as S from './styles'

const Button01 = ({ label, onClick, bgColor, disabled }) => {
  return (
    <S.Container bgColor={bgColor} onClick={onClick} disabled={disabled}>
      <S.Text> {label} </S.Text>
    </S.Container>
  )
}

export default Button01
