import React from 'react'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'

import * as S from './styles'

const ScheduledAttendence = ({
  modalScheduledVisible,
  clientName,
  closeModal
}) => {
  return (
    <Modal visible={modalScheduledVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Title> {clientName} </S.Title>
        </S.ModalHeader>
        <S.ModalMain>
          <S.InputSchedule placeholder="Data" type="date" />
          <S.InputSchedule placeholder="Horário" type="time" />
        </S.ModalMain>
        <S.ModalFooter>
          <Button01 label="Confirmar" bgColor="#79D279" />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modal>
  )
}

export default ScheduledAttendence
