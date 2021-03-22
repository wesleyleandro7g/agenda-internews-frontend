/* eslint-disable eqeqeq */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable multiline-ternary */
import React from 'react'

import Modal from '../../../components/modal'
import Button02 from '../../../components/buttons/button02'
import ShowInfo from '../../../components/show-info'

import I from '../../../utils/Icons'

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
  const sectorID = localStorage.getItem('user-sector-id')

  function convertDate(date) {
    const converted = new Date(date)

    const days = converted.toLocaleDateString()
    const hours = converted.toLocaleTimeString()

    return `${days} as ${hours}`
  }

  return (
    <Modal visible={modalDetailsVisible}>
      <S.Container>
        <S.Header>
          <S.Title>
            {attendenceDataTemp.cliente && attendenceDataTemp.cliente.nome}
          </S.Title>

          <S.StatusContent
            status={attendenceDataTemp.status && attendenceDataTemp.status.id}
          >
            <S.TextStatus>
              {attendenceDataTemp.status && attendenceDataTemp.status.descricao}
            </S.TextStatus>
          </S.StatusContent>
        </S.Header>
        <S.Main>
          <ShowInfo
            title="Tipo de solicitação"
            value={
              attendenceDataTemp.abertura &&
              attendenceDataTemp.abertura.descricao
            }
          />
          <ShowInfo
            title="Solicitante"
            value={
              attendenceDataTemp.nome_solicitante &&
              attendenceDataTemp.nome_solicitante
            }
          />
          <ShowInfo
            title="Contato"
            value={attendenceDataTemp.contato_solicitante}
          />
          <ShowInfo
            title="Aberto por"
            value={
              attendenceDataTemp.usuario && attendenceDataTemp.usuario.descricao
            }
          />
          <ShowInfo
            title="Atendido por"
            value={
              attendenceDataTemp.usuario && attendenceDataTemp.nome_atendente
            }
          />
          <ShowInfo
            title="Versão do sistema"
            value={
              attendenceDataTemp.versao_internews &&
              attendenceDataTemp.versao_internews
            }
          />
          <ShowInfo
            title="Solicitado em"
            value={convertDate(attendenceDataTemp.createdAt)}
          />
          {attendenceDataTemp.status && attendenceDataTemp.status.id === 4 && (
            <ShowInfo
              title="Finalizado em"
              value={convertDate(attendenceDataTemp.updatedAt)}
            />
          )}
        </S.Main>

        {attendenceDataTemp.status && attendenceDataTemp.status.id !== 4 ? (
          <S.Footer>
            {attendenceDataTemp.status && attendenceDataTemp.status.id === 1 ? (
              <Button02
                label="Finalizar"
                bgColor="#79D279"
                onClick={closeAttendence}
                disabled={sectorID == 1 || sectorID == 2 ? true : false}
                icon={I.RiCheckboxCircleLine}
              />
            ) : (
              <Button02
                label="Iniciar"
                bgColor="#79D279"
                onClick={openAttendence}
                disabled={sectorID == 1 || sectorID == 2 ? true : false}
                icon={I.RiCheckboxCircleLine}
              />
            )}
            <Button02
              label="Agendar"
              bgColor="#8CB3D9"
              onClick={scheduleAttendence}
              disabled={true}
              icon={I.RiCalendarEventFill}
            />
            <Button02
              label="Repassar"
              bgColor="#FFB84D"
              onClick={repassAttendence}
              disabled={sectorID == 2 ? true : false}
              icon={I.RiArrowLeftRightFill}
            />
            <Button02
              label="Cancelar"
              bgColor="#FF6666"
              onClick={closeModal}
              icon={I.RiCloseLine}
            />
          </S.Footer>
        ) : (
          <S.Footer>
            <Button02
              label="Fechar"
              bgColor="#FF6666"
              onClick={closeModal}
              icon={I.RiCloseLine}
            />
          </S.Footer>
        )}
      </S.Container>
    </Modal>
  )
}

export default DetailsAttendence
