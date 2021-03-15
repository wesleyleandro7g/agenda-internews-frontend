import React from 'react'

import I from '../../utils/Icons'

import Modal from '../modal'

import * as S from './styles'

const Alert = ({ visible, message, closeAlert }) => {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Content>
          <I.RiCloseLine size={25} cursor="pointer" onClick={closeAlert} />
        </S.Content>

        <S.ContainMessage>
          <S.Text>{message}</S.Text>
        </S.ContainMessage>
      </S.Container>
    </Modal>
  )
}

export default Alert
