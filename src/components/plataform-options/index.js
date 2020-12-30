import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './styles'

const PlataformOptions = ({ visible, onClose }) => {
  const history = useHistory()

  const userName = localStorage.getItem('user-name')
  const userSector = localStorage.getItem('user-sector-name')
  const sig = localStorage.getItem('user-sig')

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <S.Container visible={visible}>
      <S.Content>
        <S.AvatarWrapper>
          <h3> {sig} </h3>
        </S.AvatarWrapper>
        <S.UserName> {userName.toUpperCase()} </S.UserName>
        <S.UserEmail> SUPORTE {userSector} </S.UserEmail>
      </S.Content>
      <S.ConfigSection>
        <S.Logout onClick={handleLogout}>
          <S.ButtonText>SAIR</S.ButtonText>
        </S.Logout>
      </S.ConfigSection>
      <S.CloseIcon color="#FFF" onClick={onClose} />
    </S.Container>
  )
}

export default PlataformOptions
