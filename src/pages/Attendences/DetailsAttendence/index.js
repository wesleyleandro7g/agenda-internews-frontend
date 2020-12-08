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
  function convertDate(date) {
    const converted = new Date(date)

    const days = converted.toLocaleDateString()
    const hours = converted.toLocaleTimeString()

    return `${days} as ${hours}`
  }

  return (
    <Modal visible={modalDetailsVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.Title>
            {attendenceDataTemp.cliente &&
              attendenceDataTemp.cliente.razao_social}
          </S.Title>
          <S.StatusContent
            status={attendenceDataTemp.status && attendenceDataTemp.status.id}
          >
            <S.TextStatus>
              {attendenceDataTemp.status && attendenceDataTemp.status.descricao}
            </S.TextStatus>
          </S.StatusContent>
        </S.ModalHeader>
        <S.ModalMain>
          <S.TextDetailsModal>
            <S.Span>Tipo de solicitação: </S.Span>
            {attendenceDataTemp.abertura &&
              attendenceDataTemp.abertura.descricao}
          </S.TextDetailsModal>
          <S.TextDetailsModal>
            <S.Span>Solicitante: </S.Span>
            {attendenceDataTemp.nome_solicitante}
          </S.TextDetailsModal>
          <S.TextDetailsModal>
            <S.Span>Contato: </S.Span>
            {attendenceDataTemp.contato_solicitante}
          </S.TextDetailsModal>
          <S.TextDetailsModal>
            <S.Span>Solicitado em: </S.Span>
            {convertDate(attendenceDataTemp.createdAt)}
          </S.TextDetailsModal>
          {attendenceDataTemp.status && attendenceDataTemp.status.id !== 4 ? (
            ''
          ) : (
            <S.TextDetailsModal>
              <S.Span>Finalizado em: </S.Span>
              {convertDate(attendenceDataTemp.updatedAt)}
            </S.TextDetailsModal>
          )}
        </S.ModalMain>
        {attendenceDataTemp.status && attendenceDataTemp.status.id !== 4 ? (
          <S.ModalFooter>
            {attendenceDataTemp.status && attendenceDataTemp.status.id === 1 ? (
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
        ) : (
          <S.ModalFooter>
            <Button01 label="Fechar" bgColor="#FF6666" onClick={closeModal} />
          </S.ModalFooter>
        )}
      </S.ModalContent>
    </Modal>
  )
}

export default DetailsAttendence
