import React from 'react'

import * as S from './styles'

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <S.Container>
      <S.Input type="checkbox" checked={checked} onChange={onChange} />
      <S.Label> {label} </S.Label>
    </S.Container>
  )
}

export default CheckBox
