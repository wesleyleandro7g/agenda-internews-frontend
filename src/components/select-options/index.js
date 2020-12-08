import React from 'react'

import * as S from './styles'

const SelectOtions = ({
  handleAll,
  handleOpen,
  handleWaiting,
  handleSchedule,
  handleClose
}) => {
  return (
    <S.Container>
      <S.Button onClick={handleAll}>
        <S.Text>Todos</S.Text>
      </S.Button>
      <S.Button onClick={handleOpen}>
        <S.Text>Abertos</S.Text>
      </S.Button>
      <S.Button onClick={handleWaiting}>
        <S.Text>Aguardando</S.Text>
      </S.Button>
      <S.Button onClick={handleSchedule}>
        <S.Text>Agendados</S.Text>
      </S.Button>
      <S.Button onClick={handleClose}>
        <S.Text>Finalizados</S.Text>
      </S.Button>
    </S.Container>
  )
}

export default SelectOtions
