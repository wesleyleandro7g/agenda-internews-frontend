/* eslint-disable array-callback-return */
import React, { useState } from 'react'

// import api from '../../../services/API'

// import { useClientContext } from '../../../context/ClientContext'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import CheckBox from '../../../components/inputs/checkbox'

// import I from '../../../utils/Icons'

import { CheckBoxUsersData } from '../data'
import * as S from './styles'

const RepassAttendence = ({ modalRepassVisible, clientName, closeModal }) => {
  const [Checks] = useState(CheckBoxUsersData)
  const [itemChecked, setItemChecked] = useState('Alcélio')

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
    <Modal visible={modalRepassVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <h4> {clientName} </h4>
        </S.ModalHeader>
        <S.ModalMain>
          <h6>Selecione o suporte</h6>
          <S.ModalMainGrid>
            {Checks.map(item => (
              <CheckBox
                key={item.id}
                label={item.label}
                checked={item.checked}
                onChange={() => handleCheckBox(item)}
              />
            ))}
          </S.ModalMainGrid>
        </S.ModalMain>
        <S.ModalFooter>
          <Button01 label="Confirmar" bgColor="#79D279" />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modal>
  )
}

export default RepassAttendence
