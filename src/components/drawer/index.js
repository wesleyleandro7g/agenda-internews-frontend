import React from 'react'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/TPLogo.png'

import { useDrawer } from '../../context/DrawerContext'

import { DataInternal, DataExternal } from './data'
import * as S from './styles'

const HandleUserType = ({ open }) => {
  const history = useHistory()
  // const [userType] = useState('Externo')
  const userType = localStorage.getItem('user-section')

  function handleInternalNavigation(page) {
    DataInternal.map(item => {
      if (item.id !== page.id) {
        item.select = false
      } else {
        item.select = true
      }

      return item
    })

    history.push(`/${page.handlePage}`)
  }

  function handleExternalNavigation(page) {
    DataExternal.map(item => {
      if (item.id !== page.id) {
        item.select = false
      } else {
        item.select = true
      }

      return item
    })

    history.push(`/${page.handlePage}`)
  }

  switch (userType) {
    case 'interno':
      return (
        <S.SectionNav>
          {DataInternal.map(item => (
            <S.IconsWrapper
              key={item.id}
              onClick={() => handleInternalNavigation(item)}
              select={item.select}
            >
              <item.icon size={16} />
              {open && <S.Text> {item.handlePage} </S.Text>}
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
    case 'externo':
      return (
        <S.SectionNav>
          {DataExternal.map(item => (
            <S.IconsWrapper
              key={item.id}
              onClick={() => handleExternalNavigation(item)}
              select={item.select}
            >
              <item.icon size={16} />
              {open && <S.Text> {item.handlePage} </S.Text>}
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
    case 'administrativo':
      return (
        <S.SectionNav>
          {DataExternal.map(item => (
            <S.IconsWrapper
              key={item.id}
              onClick={() => handleExternalNavigation(item)}
              select={item.select}
            >
              <item.icon size={16} />
              {open && <S.Text> {item.handlePage} </S.Text>}
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
  }
}

const Drawer = () => {
  const { open } = useDrawer()

  return (
    <S.Container state={open}>
      <S.SectionTitle state={open}>
        {open ? <S.Img src={logo} /> : <S.Img2 src={logo} />}
      </S.SectionTitle>

      <HandleUserType open={open} />
    </S.Container>
  )
}

export default Drawer
