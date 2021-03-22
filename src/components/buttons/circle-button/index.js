import React from 'react'

import * as S from './styles'

const CircleButton = ({ icon, onClick, disabled }) => {
  const Icon = icon

  return (
    <S.Container onClick={onClick} disabled={disabled}>
      <Icon size={20} />
    </S.Container>
  )
}

export default CircleButton
