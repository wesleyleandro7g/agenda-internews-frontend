import React from 'react'
import Tootip from '../tooltip'

import * as S from './styles'

const SelectOptions = ({ handle, title }) => {
  return (
    <>
      <S.Button onClick={handle}>
        <S.Text data-tip={`Atendimentos ${title}`} data-delay-show={1000}>
          {title}
        </S.Text>
      </S.Button>
      <Tootip />
    </>
  )
}

export default SelectOptions
