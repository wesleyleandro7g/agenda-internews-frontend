/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Button01 from '../../components/buttons/button01'
import Button02 from '../../components/buttons/button02'
import Modal from '../../components/modal'
import CheckBox from '../../components/inputs/checkbox'

import I from '../../utils/Icons'

import { DataTemp, CheckBoxData } from './dataTemp'
import { DataInfoOptions } from './data'

import * as S from './styles'

const OpenNewRequest = ({ visible, cancelable }) => {
  const [searchInput, setSearchInput] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [selected, setSelected] = useState(false)
  const [clientSelected, setClientSelected] = useState(false)
  const [Checks] = useState(CheckBoxData)
  const [itemChecked, setItemChecked] = useState('')

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleFilterData() {
    const dataFiltered = DataTemp.filter(item =>
      item.empresa.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handleSelectClient(item) {
    setSelected(!selected)
    setClientSelected(item)
  }

  function handleCheckBox(props) {
    Checks.map(item => {
      if (item.id === props.id) {
        item.checked = true
        setItemChecked(item.label)
      } else {
        item.checked = false
      }
    })
  }

  console.log(itemChecked)

  return (
    <Modal visible={visible}>
      <S.ModalContentBig>
        <S.ModalHeaderBig>
          <h6>Nova solicitação</h6>
        </S.ModalHeaderBig>

        <S.ModalMainBig>
          {selected ? (
            <S.ModalBigContent>
              <S.ClientSelected>
                <S.TextClientSelected>
                  {clientSelected.empresa}
                </S.TextClientSelected>
                <I.RiCloseLine
                  cursor="pointer"
                  onClick={() => setSelected(!selected)}
                />
              </S.ClientSelected>
              <S.ScrollClients>
                <S.TextClientSelected>
                  Outras solicitaçõees abertos
                </S.TextClientSelected>
              </S.ScrollClients>
            </S.ModalBigContent>
          ) : (
            <S.ModalBigContent>
              <S.InputNewAttendence
                placeholder="Cliente"
                onChange={e => setSearchInput(e.target.value)}
              />
              <S.ScrollClients>
                {filtered.map(item => (
                  <S.ClientWrapper
                    key={item.id}
                    onClick={() => handleSelectClient(item)}
                  >
                    <S.ClientText>00000</S.ClientText>
                    <S.ClientText> {item.empresa} </S.ClientText>
                  </S.ClientWrapper>
                ))}
              </S.ScrollClients>
            </S.ModalBigContent>
          )}
          <S.ModalBigContent>
            <S.ItemsRightTop>
              <S.TextClientSelected>Selecione um motivo</S.TextClientSelected>
              <S.ModalMainGridDuo>
                {Checks.map(item => (
                  <CheckBox
                    key={item.id}
                    label={item.label}
                    checked={item.checked}
                    onChange={() => handleCheckBox(item)}
                  />
                ))}
              </S.ModalMainGridDuo>
            </S.ItemsRightTop>

            <S.ModalFooterBig>
              <Button01 label="Confirmar" bgColor="#79D279" />
              <Button01
                label="Cancelar"
                bgColor="#FF6666"
                onClick={cancelable}
              />
            </S.ModalFooterBig>
          </S.ModalBigContent>
        </S.ModalMainBig>
      </S.ModalContentBig>
    </Modal>
  )
}

const Requests = () => {
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [modalRequestsVisible, setModalRequestsVisible] = useState(false)
  const [userType] = useState('Interno')

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleFilterData() {
    const dataFiltered = DataTemp.filter(item =>
      item.empresa.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  return (
    <Layout page="Solicitações">
      <S.Container>
        <S.SubHeader>
          <S.ItemsLeftSubHeader>
            {userType === 'Interno' && (
              <Button02
                label="Nova solicitação"
                icon={I.RiAddCircleLine}
                onClick={() => setModalRequestsVisible(!modalRequestsVisible)}
              />
            )}
            <h5>Total de solicitações: 5</h5>
          </S.ItemsLeftSubHeader>

          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
          </S.ItemsRigthSubHeader>
        </S.SubHeader>
      </S.Container>

      <S.MainWrapper>
        <S.ProvidersInfo>
          {DataInfoOptions.map(item => (
            <S.ProvidersInfoText key={item.id}>
              {item.title}
            </S.ProvidersInfoText>
          ))}
        </S.ProvidersInfo>

        <S.ScrollArea speed={0.6}>
          {filtered.map(item => (
            <S.ProvidersListWrapper key={item.id}>
              <S.ProvidersInfoText> {item.data} </S.ProvidersInfoText>
              <S.ProvidersInfoText> {item.empresa} </S.ProvidersInfoText>
              <S.ProvidersInfoText>{item.solicitacao}</S.ProvidersInfoText>
              <S.ProvidersInfoText> {item.status} </S.ProvidersInfoText>
            </S.ProvidersListWrapper>
          ))}
        </S.ScrollArea>
      </S.MainWrapper>

      <OpenNewRequest
        visible={modalRequestsVisible}
        cancelable={() => setModalRequestsVisible(!modalRequestsVisible)}
      />
    </Layout>
  )
}

export default Requests
