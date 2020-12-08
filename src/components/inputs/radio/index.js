import React from 'react'

import * as S from './styles'

const Radio = ({ name, label, value }) => {
  return (
    <S.Container>
      <S.Input type="radio" name={name} value={value} />
      <S.Label> {label} </S.Label>
    </S.Container>
  )
}

export default Radio
