import React from 'react'

import Modal from '../modal'
import Button02 from '../buttons/button02'

import I from '../../utils/Icons'

import * as S from './styles'

const Alert = ({ visible, message, closeAlert, onDelete }) => {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Header>
          <S.Content>
            <I.RiAlertLine size={35} color="#fff" />
            <S.Title> Atenção </S.Title>
          </S.Content>

          <I.RiCloseLine
            size={25}
            cursor="pointer"
            onClick={closeAlert}
            color="#fff"
          />
        </S.Header>

        <S.Main>
          <S.Text> {message} </S.Text>
        </S.Main>

        <S.Footer>
          <Button02
            icon={I.RiDeleteBin7Line}
            label="Excluir"
            bgColor="#FF6666"
            onClick={onDelete}
          />
        </S.Footer>
      </S.Container>
    </Modal>
  )
}

export default Alert
