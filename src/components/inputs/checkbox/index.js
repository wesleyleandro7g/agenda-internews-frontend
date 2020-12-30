import React from 'react'

import * as S from './styles'

const CheckBox = ({ label, value, checked, onChange }) => {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <S.Label> {label} </S.Label>
    </S.Container>
  )
}

export default CheckBox
