/* eslint-disable array-callback-return */
import React from 'react'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/TPLogo.png'

import { useDrawer } from '../../context/DrawerContext'

import { DataInternal, DataExternal, DataOnline, DataAdmin } from './data'
import * as S from './styles'

const HandleUserType = ({ open, state }) => {
  const history = useHistory()
  const {
    internalOptionsRegisterVisible,
    setInternalOptionsRegisterVisible
  } = useDrawer()
  const userType = localStorage.getItem('user-sector-name')

  function handleInternalNavigation(page) {
    DataInternal.map(item => {
      if (item.id !== page.id) {
        item.select = false
      } else {
        item.select = true
      }
    })

    if (page.id !== 4) {
      history.push(`/${page.handlePage}`)
    } else {
      setInternalOptionsRegisterVisible(!internalOptionsRegisterVisible)
    }
  }

  function handleInternalNavigationOptions(page) {
    DataInternal.map(item => {
      if (item.id === 4) {
        item.options.map(option => {
          if (option.id !== page.id) {
            option.select = false
          } else {
            option.select = true
          }
        })
      }
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

  function handleOnlineNavigation(page) {
    DataOnline.map(item => {
      if (item.id !== page.id) {
        item.select = false
      } else {
        item.select = true
      }

      return item
    })

    history.push(`/${page.handlePage}`)
  }

  function handleManagerNavigation(page) {
    DataAdmin.map(item => {
      if (item.id !== page.id) {
        item.select = false
      } else {
        item.select = true
      }
    })

    if (page.id !== 8) {
      history.push(`/${page.handlePage}`)
    } else {
      setInternalOptionsRegisterVisible(!internalOptionsRegisterVisible)
    }
  }

  function handleManagerNavigationOptions(page) {
    DataAdmin.map(item => {
      if (item.id === 8) {
        item.options.map(option => {
          if (option.id !== page.id) {
            option.select = false
          } else {
            option.select = true
          }
        })
      }
    })

    history.push(`/${page.handlePage}`)
  }

  switch (userType) {
    case 'INTERNO':
      return (
        <S.SectionNav>
          {DataInternal.map(item => (
            <S.IconsWrapper key={item.id}>
              <S.PrimaryOptionWrapper
                select={item.select}
                onClick={() => handleInternalNavigation(item)}
              >
                <item.icon size={18} />
                {open && <S.Text> {item.handlePage} </S.Text>}
                <S.Text2> {item.handlePage} </S.Text2>
              </S.PrimaryOptionWrapper>

              {item.options && internalOptionsRegisterVisible && (
                <S.SecondaryOptionWrapper>
                  {item.options.map(option => (
                    <S.SecondaryOptionsItemsWrapper
                      key={option.id}
                      onClick={() => handleInternalNavigationOptions(option)}
                      select={option.select}
                      state={state}
                    >
                      <option.icon size={18} />
                      {open && (
                        <S.TextOptions> {option.pageName} </S.TextOptions>
                      )}
                      <S.Text2> {option.pageName} </S.Text2>
                    </S.SecondaryOptionsItemsWrapper>
                  ))}
                </S.SecondaryOptionWrapper>
              )}
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
    case 'EXTERNO':
      return (
        <S.SectionNav>
          {DataExternal.map(item => (
            <S.IconsWrapper
              key={item.id}
              onClick={() => handleExternalNavigation(item)}
            >
              <S.PrimaryOptionWrapper select={item.select}>
                <item.icon size={18} />
                {open && <S.Text> {item.handlePage} </S.Text>}
                <S.Text2> {item.handlePage} </S.Text2>
              </S.PrimaryOptionWrapper>
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
    case 'ONLINE':
      return (
        <S.SectionNav>
          {DataOnline.map(item => (
            <S.IconsWrapper
              key={item.id}
              onClick={() => handleOnlineNavigation(item)}
            >
              <S.PrimaryOptionWrapper select={item.select}>
                <item.icon size={18} />
                {open && <S.Text> {item.handlePage} </S.Text>}
                <S.Text2> {item.handlePage} </S.Text2>
              </S.PrimaryOptionWrapper>
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
    case 'ADMINISTRATIVO':
      return (
        <S.SectionNav>
          {DataAdmin.map(item => (
            <S.IconsWrapper key={item.id}>
              <S.PrimaryOptionWrapper
                select={item.select}
                onClick={() => handleManagerNavigation(item)}
              >
                <item.icon size={18} />
                {open && <S.Text> {item.handlePage} </S.Text>}
                <S.Text2> {item.handlePage} </S.Text2>
              </S.PrimaryOptionWrapper>

              {item.options && internalOptionsRegisterVisible && (
                <S.SecondaryOptionWrapper>
                  {item.options.map(option => (
                    <S.SecondaryOptionsItemsWrapper
                      key={option.id}
                      onClick={() => handleManagerNavigationOptions(option)}
                      select={option.select}
                      state={state}
                    >
                      <option.icon size={18} />
                      {open && (
                        <S.TextOptions> {option.pageName} </S.TextOptions>
                      )}
                      <S.Text2> {option.pageName} </S.Text2>
                    </S.SecondaryOptionsItemsWrapper>
                  ))}
                </S.SecondaryOptionWrapper>
              )}
            </S.IconsWrapper>
          ))}
        </S.SectionNav>
      )
  }
}

const Drawer = () => {
  const { open, setOpen } = useDrawer()
  const user = localStorage.getItem('user-name')
  const userType = localStorage.getItem('user-sector-name')

  function toggleDrawer() {
    setOpen(!open)
  }

  return (
    <S.Container state={open}>
      <S.SectionTitle state={open}>
        {open ? <S.Img src={logo} /> : <S.Img2 src={logo} />}

        <S.UserDatailsMobileWrapper>
          <S.UserDatailsMobileTitle> {user} </S.UserDatailsMobileTitle>
          <S.UserDatailsMobileDescription>
            suporte {userType}
          </S.UserDatailsMobileDescription>
        </S.UserDatailsMobileWrapper>
      </S.SectionTitle>

      <HandleUserType open={open} state={open} />

      <S.CloseButtonWrapper>
        <S.CloseButton onClick={() => toggleDrawer()} />
      </S.CloseButtonWrapper>
    </S.Container>
  )
}

export default Drawer
