import React from 'react'

import * as S from './styles'

const CircleButton = ({ label, icon, onClick, bgColor = '#FFF', disabled }) => {
  const Icon = icon

  return (
    <S.Container onClick={onClick} bgColor={bgColor} disabled={disabled}>
      <Icon size={20} />
    </S.Container>
  )
}

export default CircleButton
