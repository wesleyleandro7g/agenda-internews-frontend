import React from 'react'

import * as S from './styles'

const CircleButton = ({ icon, onClick, disabled, dataTip, dataDelayShow }) => {
  const Icon = icon

  return (
    <S.Container
      onClick={onClick}
      disabled={disabled}
      data-tip={dataTip}
      data-delay-show={dataDelayShow}
    >
      <Icon size={20} />
    </S.Container>
  )
}

export default CircleButton
