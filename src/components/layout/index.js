import React from 'react'

import { useDrawer } from '../../context/DrawerContext'

import Header from '../header'
import Drawer from '../drawer'

import * as S from './styles'

const Layout = ({ children, page, alert = false }) => {
  const { open } = useDrawer()

  return (
    <S.Container>
      <Drawer />
      <S.Contain state={open}>
        <Header page={page} alert={alert} />
        <S.Content>{children}</S.Content>
      </S.Contain>
    </S.Container>
  )
}

export default Layout
