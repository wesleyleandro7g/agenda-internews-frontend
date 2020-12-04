/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

import { useClientContext } from '../../../context/ClientContext'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import CheckBox from '../../../components/inputs/checkbox'

import I from '../../../utils/Icons'

import * as S from './styles'

const OpenNewAttendence = ({ newAttendenceVisible, cancelable }) => {
  const { dataClientContext } = useClientContext()
  const [searchInput, setSearchInput] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [clientSelected, setClientSelected] = useState(false)
  const [selected, setSelected] = useState(false)
  const [checkBoxData, setCheckBoxData] = useState([])
  const [itemChecked, setItemChecked] = useState('')

  useEffect(() => {
    handleData()
    handleCallApi()
  }, [])

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleCallApi() {
    api.get('/reasons/opening/index').then(res => setCheckBoxData(res.data))
  }

  function handleData() {
    setFiltered(dataClientContext)
  }

  function handleFilterData() {
    const dataFiltered = dataClientContext.filter(item =>
      item.razao_social.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handleSelectClient(item) {
    setSelected(!selected)
    setClientSelected(item)
  }

  function handleCheckBox(props) {
    checkBoxData.map(item => {
      if (item.id === props.id) {
        setItemChecked(item.id)
      }
    })
  }

  function handleNewAttendence() {
    console.log(clientSelected.id)
    console.log(itemChecked)
  }

  return (
    <Modal visible={newAttendenceVisible}>
      <S.ModalContentBig>
        <S.ModalHeaderBig>
          <h6>Novo atendimento</h6>
        </S.ModalHeaderBig>
        <S.ModalMainBig>
          {selected ? (
            <S.ModalBigContent>
              <S.ClientSelected>
                <S.TextClientSelected>
                  {clientSelected.razao_social}
                </S.TextClientSelected>
                <I.RiCloseLine
                  cursor="pointer"
                  onClick={() => setSelected(!selected)}
                />
              </S.ClientSelected>
              <S.ScrollClients>
                <S.TextClientSelected>
                  Outros atendimentos abertos
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
                    <S.ClientText> {item.identificador_servidor} </S.ClientText>
                    <S.ClientText> {item.razao_social} </S.ClientText>
                  </S.ClientWrapper>
                ))}
              </S.ScrollClients>
            </S.ModalBigContent>
          )}
          <S.ModalBigContent>
            <S.ItemsRightTop>
              <S.TextClientSelected>Solicitante</S.TextClientSelected>
              <S.InputRequesterName placeholder="Nome do solicitante" />
              <S.TextClientSelected>Selecione um motivo</S.TextClientSelected>
              <S.ModalMainGridDuo>
                {checkBoxData.map(item => (
                  <CheckBox
                    key={item.id}
                    label={item.descricao}
                    onChange={() => handleCheckBox(item)}
                  />
                ))}
              </S.ModalMainGridDuo>
            </S.ItemsRightTop>

            <S.ModalFooter>
              <Button01
                label="Confirmar"
                bgColor="#79D279"
                onClick={() => handleNewAttendence()}
              />
              <Button01
                label="Cancelar"
                bgColor="#FF6666"
                onClick={cancelable}
              />
            </S.ModalFooter>
          </S.ModalBigContent>
        </S.ModalMainBig>
      </S.ModalContentBig>
    </Modal>
  )
}

export default OpenNewAttendence
