/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'
import CheckBox from '../../../components/inputs/checkbox'

import { CheckBoxData } from '../data'
import * as S from './styles'

const CloseAttendence = ({ modalCloseVisible, clientName, closeModal }) => {
  const [Checks] = useState(CheckBoxData)
  const [itemChecked, setItemChecked] = useState('')

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
    <Modal visible={modalCloseVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <h4> {clientName} </h4>
        </S.ModalHeader>
        <S.ModalMain>
          <h6>Opções de fechamento</h6>
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

export default CloseAttendence
