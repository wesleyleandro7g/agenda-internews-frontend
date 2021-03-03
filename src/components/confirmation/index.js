import React from 'react'

import I from '../../utils/Icons'
import Button02 from '../buttons/button02'

import Modal from '../modal'

import * as S from './styles'

const Confirmation = ({ visible, message, closeConfirmation, confirmated }) => {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Content>
          <I.RiAlertLine size={50} color="#cccc00" />
          <S.Text>Atenção! Essa operação é irreversível.</S.Text>
          <S.TextBold>Confirma a deleção?</S.TextBold>
        </S.Content>
        <S.Footer>
          <Button02
            label="Cancelar"
            icon={I.RiCloseLine}
            bgColor="#FF6666"
            onClick={closeConfirmation}
          />
          <Button02
            label="Confirmar"
            icon={I.RiCheckboxCircleLine}
            bgColor="#79D279"
            onClick={confirmated}
          />
        </S.Footer>
      </S.Container>
    </Modal>
  )
}

export default Confirmation
