/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'

import Layout from '../../components/layout'
import Search from '../../components/search'
import Modal from '../../components/modal'
import Button01 from '../../components/buttons/button01'
import Button02 from '../../components/buttons/button02'
import CheckBox from '../../components/inputs/checkbox'

import I from '../../utils/Icons'

import { DataTemp } from './dataTemp'
import { DataInfoOptions, CheckBoxData, CheckBoxUsersData } from './data'

import * as S from './styles'

const ModalDetailsAttendence = ({
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

const ModalCloseAttendence = ({
  modalCloseVisible,
  clientName,
  closeModal
}) => {
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
        <S.ModalFooterDual>
          <Button01 label="Confirmar" bgColor="#79D279" />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooterDual>
      </S.ModalContent>
    </Modal>
  )
}

const ModalScheduledAttendence = ({
  modalScheduledVisible,
  clientName,
  closeModal
}) => {
  return (
    <Modal visible={modalScheduledVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <h4> {clientName} </h4>
        </S.ModalHeader>
        <S.ModalMain>
          <S.InputSchedule placeholder="Data" type="date" />
          <S.InputSchedule placeholder="Horário" type="time" />
        </S.ModalMain>
        <S.ModalFooterDual>
          <Button01 label="Confirmar" bgColor="#79D279" />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooterDual>
      </S.ModalContent>
    </Modal>
  )
}

const ModalRepassAttendence = ({
  modalRepassVisible,
  clientName,
  closeModal
}) => {
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
        <S.ModalFooterDual>
          <Button01 label="Confirmar" bgColor="#79D279" />
          <Button01 label="Cancelar" bgColor="#FF6666" onClick={closeModal} />
        </S.ModalFooterDual>
      </S.ModalContent>
    </Modal>
  )
}

const OpenNewAttendence = ({ newAttendenceVisible, cancelable }) => {
  const [searchInput, setSearchInput] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [clientSelected, setClientSelected] = useState(false)
  const [selected, setSelected] = useState(false)
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
                  {clientSelected.empresa}
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

const Attendences = () => {
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState(false)
  const [modalDetailsVisible, setModalDetailsVisible] = useState(false)
  const [modalCloseVisible, setModalCloseVisible] = useState(false)
  const [modalScheduledVisible, setModalScheduledVisible] = useState(false)
  const [modalRepassVisible, setModalRepassVisible] = useState(false)
  const [attendenceDataTemp, setAttendenceDataTemp] = useState({})
  const [newAttendenceVisible, setNewAttendenceVisible] = useState(false)

  useEffect(() => {
    handleFilterData()
  }, [searchInput])

  function handleFilterData() {
    const dataFiltered = DataTemp.filter(item =>
      item.empresa.toLowerCase().includes(searchInput)
    )

    setFiltered(dataFiltered)
  }

  function handlePreviewAttendence(item) {
    setAttendenceDataTemp(item)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalCloseAndDetailsAttendence() {
    setModalCloseVisible(!modalCloseVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalSchuledAndDetailsAttendence() {
    setModalScheduledVisible(!modalScheduledVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  function toggleModalRepassAndDetailsAttedence() {
    setModalRepassVisible(!modalRepassVisible)
    setModalDetailsVisible(!modalDetailsVisible)
  }

  return (
    <Layout page="Atendimentos">
      <S.Container>
        <S.SubHeader>
          <S.ItemsLeftSubHeader>
            <Button02
              label="Abrir atendimento"
              icon={I.RiAddCircleLine}
              onClick={() => setNewAttendenceVisible(!newAttendenceVisible)}
            />
            <h5>Total de atendimentos: 5</h5>
          </S.ItemsLeftSubHeader>

          <S.ItemsRigthSubHeader>
            <Search onChange={e => setSearchInput(e.target.value)} />
          </S.ItemsRigthSubHeader>
        </S.SubHeader>
      </S.Container>

      <S.MainWrapper>
        <S.DataWrapper>
          <S.ProvidersInfo>
            {DataInfoOptions.map(item => (
              <S.ProvidersInfoText key={item.id}>
                {item.title}
              </S.ProvidersInfoText>
            ))}
          </S.ProvidersInfo>

          <S.ScrollArea speed={0.6}>
            {filtered.map(item => (
              <S.ProvidersListWrapper
                key={item.id}
                onClick={() => handlePreviewAttendence(item)}
              >
                <S.ProvidersInfoText> {item.empresa} </S.ProvidersInfoText>
                <S.ProvidersInfoText>
                  {item.nome_solicitante}
                </S.ProvidersInfoText>
                <S.ProvidersInfoText>
                  {item.contato_solicitante}
                </S.ProvidersInfoText>
                <S.ProvidersInfoText> {item.id_abertura} </S.ProvidersInfoText>
                <S.ProvidersInfoText>{item.status}</S.ProvidersInfoText>
              </S.ProvidersListWrapper>
            ))}
          </S.ScrollArea>
        </S.DataWrapper>
      </S.MainWrapper>

      <ModalDetailsAttendence
        attendenceDataTemp={attendenceDataTemp}
        modalDetailsVisible={modalDetailsVisible}
        closeModal={() => setModalDetailsVisible(!modalDetailsVisible)}
        openAttendence={() => setModalDetailsVisible(!modalDetailsVisible)}
        closeAttendence={() => toggleModalCloseAndDetailsAttendence()}
        scheduleAttendence={() => toggleModalSchuledAndDetailsAttendence()}
        repassAttendence={() => toggleModalRepassAndDetailsAttedence()}
      />

      <ModalCloseAttendence
        modalCloseVisible={modalCloseVisible}
        clientName={attendenceDataTemp.empresa}
        closeModal={() => toggleModalCloseAndDetailsAttendence()}
      />

      <ModalScheduledAttendence
        modalScheduledVisible={modalScheduledVisible}
        clientName={attendenceDataTemp.empresa}
        closeModal={() => toggleModalSchuledAndDetailsAttendence()}
      />

      <ModalRepassAttendence
        modalRepassVisible={modalRepassVisible}
        clientName={attendenceDataTemp.empresa}
        closeModal={() => toggleModalRepassAndDetailsAttedence()}
      />

      <OpenNewAttendence
        newAttendenceVisible={newAttendenceVisible}
        cancelable={() => setNewAttendenceVisible(!newAttendenceVisible)}
      />
    </Layout>
  )
}

export default Attendences
