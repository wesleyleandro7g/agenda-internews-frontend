import React from 'react'

import * as S from './styles'

const SelectOptions = ({ handle, title }) => {
  return (
    <S.Button onClick={handle}>
      <S.Text> {title} </S.Text>
    </S.Button>
  )
}

export default SelectOptions
