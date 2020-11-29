import React, { useState } from 'react'

import { useDrawer } from '../../context/DrawerContext'

import * as S from './styles'

const Header = ({ page, alert }) => {
  const [modalUserVisible, setModalUserVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const { open, setOpen } = useDrawer()

  //   const sig = localStorage.getItem('user-sig')

  function handleModalAlertVisible() {
    setModalAlertVisible(!modalAlertVisible)
    setModalUserVisible(false)
  }

  function handleModalUserVisible() {
    setModalUserVisible(!modalUserVisible)
    setModalAlertVisible(false)
  }

  return (
    <>
      <S.Container>
        <S.WrapperItems>
          <S.MenuIcon onClick={() => setOpen(!open)} />
          <S.Title> {page} </S.Title>
        </S.WrapperItems>
        <S.WrapperItems>
          {alert && <S.AlertIcon onClick={handleModalAlertVisible} />}
          <S.Avatar onClick={handleModalUserVisible}>
            <S.AvatarText> WL </S.AvatarText>
          </S.Avatar>
        </S.WrapperItems>
      </S.Container>
    </>
  )
}

export default Header
