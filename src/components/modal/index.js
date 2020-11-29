import React from 'react'

import * as S from './styles'

const Modal = ({ visible, children }) => {
  return (
    <S.Container visible={visible}>
      <S.Modal>{children}</S.Modal>
    </S.Container>
  )
}

export default Modal
