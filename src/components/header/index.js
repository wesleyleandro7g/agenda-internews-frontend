import React, { useState } from 'react'

import I from '../../utils/Icons'

import PlataformOptions from '../plataform-options'

import { useDrawer } from '../../context/DrawerContext'

import Search from '../search-header'

import * as S from './styles'

const Header = ({ page, alert, search }) => {
  const [modalUserVisible, setModalUserVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const { open, setOpen } = useDrawer()

  const sig = localStorage.getItem('user-sig')

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
        <S.ContainItems>
          <S.WrapperItems>
            <S.MenuIcon onClick={() => setOpen(!open)} />
          </S.WrapperItems>

          <S.WrapperItems>
            <S.Title> {page} </S.Title>
          </S.WrapperItems>
        </S.ContainItems>

        <S.ContainItems>
          {alert && (
            <S.WrapperItems>
              <S.AlertIcon onClick={handleModalAlertVisible} />
            </S.WrapperItems>
          )}

          <S.WrapperItems>
            <Search onChange={search} />
          </S.WrapperItems>

          <S.WrapperItems>
            <S.Avatar onClick={handleModalUserVisible}>
              <S.AvatarText> {sig} </S.AvatarText>
            </S.Avatar>
            <h6>JANYELLE NAYARA PEREIRA SANTOS</h6>
          </S.WrapperItems>
        </S.ContainItems>
      </S.Container>

      <S.ContainerMobile>
        <S.WrapperItems>
          <S.MenuIcon onClick={() => setOpen(!open)} />
          <S.Title> {page} </S.Title>
        </S.WrapperItems>
        <S.WrapperItems>
          {search && <Search onChange={search} />}
          <I.RiMore2Line color="#fff" size={24} />
        </S.WrapperItems>
      </S.ContainerMobile>

      <PlataformOptions
        visible={modalUserVisible}
        onClose={() => setModalUserVisible(!modalUserVisible)}
      />
    </>
  )
}

export default Header
