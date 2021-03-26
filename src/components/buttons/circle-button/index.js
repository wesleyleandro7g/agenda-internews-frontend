import React from 'react'

import * as S from './styles'

const CircleButton = ({
  icon,
  onClick,
  disabled,
  dataTip,
  dataDelayShow,
  dark
}) => {
  const Icon = icon

  return (
    <S.Container
      onClick={onClick}
      disabled={disabled}
      data-tip={dataTip}
      data-delay-show={dataDelayShow}
      dark={dark}
    >
      <Icon size={20} dark={dark} />
    </S.Container>
  )
}

export default CircleButton
