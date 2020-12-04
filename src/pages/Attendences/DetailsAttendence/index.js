/* eslint-disable multiline-ternary */
import React from 'react'

import Modal from '../../../components/modal'
import Button01 from '../../../components/buttons/button01'

import * as S from './styles'

const DetailsAttendence = ({
  attendenceDataTemp,
  modalDetailsVisible,
  closeModal,
  openAttendence,
  closeAttendence,
  scheduleAttendence,
  repassAttendence
}) => {
  return (
    <Modal visible={modalDetailsVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <h4> {attendenceDataTemp.empresa} </h4>
          <S.StatusContent status={attendenceDataTemp.status}>
            <S.TextStatus>{attendenceDataTemp.status}</S.TextStatus>
          </S.StatusContent>
        </S.ModalHeader>
        <S.ModalMain>
          <S.TextDetailsModal>
            Tipo de solicitação: {attendenceDataTemp.id_abertura}
          </S.TextDetailsModal>
          <S.TextDetailsModal>
            Solicitante: {attendenceDataTemp.nome_solicitante}
          </S.TextDetailsModal>
          <S.TextDetailsModal>
            Contato: {attendenceDataTemp.contato_solicitante}
          </S.TextDetailsModal>
        </S.ModalMain>
        <S.ModalFooter>
          {attendenceDataTemp.status === 'Aberto' ? (
            <Button01
              label="Finalizar"
              bgColor="#79D279"
              onClick={closeAttendence}
            />
          ) : (
            <Button01
              label="Iniciar"
              bgColor="#79D279"
              onClick={openAttendence}
            />
          )}
          <Button01
            label="Agendar"
            bgColor="#8CB3D9"
            onClick={scheduleAttendence}
          />
          <Button01
            label="Repassar"
            bgColor="#FFB84D"
            onClick={repassAttendence}
          />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modal>
  )
}

export default DetailsAttendence
