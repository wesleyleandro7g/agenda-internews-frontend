import React, { useState } from 'react'

import I from '../../utils/Icons'

import PlataformOptions from '../plataform-options'
import Tooltip from '../tooltip'

import { useDrawer } from '../../context/DrawerContext'

import Search from '../search-header'

import * as S from './styles'

const Header = ({
  page,
  alert,
  search,
  register,
  attendenceRepports,
  attendenceRefresh,
  reportParams
}) => {
  const [modalUserVisible, setModalUserVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const { open, setOpen } = useDrawer()

  const sig = localStorage.getItem('user-sig')
  const userName = localStorage.getItem('user-name')

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
            <S.MenuIcon
              onClick={() => setOpen(!open)}
              data-tip={open ? 'Recolher menu' : 'Exibir menu'}
              data-delay-show={1000}
            />
          </S.WrapperItems>

          <S.WrapperItems>
            <S.Title data-tip={page} data-delay-show={4000}>
              {page}
            </S.Title>
          </S.WrapperItems>
        </S.ContainItems>

        <S.ContainItems>
          {alert && (
            <S.WrapperItems>
              <S.AlertIcon onClick={handleModalAlertVisible} />
            </S.WrapperItems>
          )}

          {register && (
            <S.WrapperItems>
              <I.RiAddCircleLine
                size={22}
                cursor="pointer"
                color="#333"
                onClick={register}
                data-tip="Adicionar"
              />
            </S.WrapperItems>
          )}

          {attendenceRepports && (
            <S.WrapperItems>
              <I.RiFileTextLine
                size={22}
                cursor="pointer"
                color="#333"
                onClick={attendenceRepports}
              />
            </S.WrapperItems>
          )}

          {attendenceRefresh && (
            <S.WrapperItems>
              <I.RiRefreshLine
                size={22}
                cursor="pointer"
                color="#333"
                onClick={attendenceRefresh}
                data-tip="Recarregar"
              />
            </S.WrapperItems>
          )}

          {search && (
            <S.WrapperItems>
              <Search onChange={search} data-tip="Pesquisar" />
            </S.WrapperItems>
          )}

          {reportParams && (
            <S.WrapperItems>
              <I.RiFilterLine
                size={22}
                cursor="pointer"
                color="#333"
                onClick={reportParams}
                data-tip="Informar parâmetros"
              />
            </S.WrapperItems>
          )}

          <S.WrapperItems>
            <S.Avatar
              onClick={handleModalUserVisible}
              data-tip={userName.toUpperCase()}
              data-delay-show={2000}
            >
              <S.AvatarText>{sig}</S.AvatarText>
            </S.Avatar>
            <S.UserName> {userName} </S.UserName>
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

      <Tooltip />
    </>
  )
}

export default Header
