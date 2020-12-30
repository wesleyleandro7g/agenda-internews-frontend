import React from 'react'

import * as S from './styles'

const Fab = ({ icon, onClick, bgColor = '#FFF' }) => {
  const Icon = icon

  return (
    <S.Content>
      <S.Container onClick={onClick} bgColor={bgColor}>
        <Icon size={28} color="#797979" />
      </S.Container>
    </S.Content>
  )
}

export default Fab
