import React from 'react'

import Modal from '../modal'
import Input03 from '../inputs/input03'
import Button02 from '../buttons/button02'

import I from '../../utils/Icons'

import * as S from './styles'

const RegisterAndUpdate = ({ visible, title, toggleVisible }) => {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Header>
          <S.Title> {title} </S.Title>
        </S.Header>

        <S.Main>
          <Input03 label="Descrição" name="descricao" type="text" />
        </S.Main>

        <S.Footer>
          <Button02
            label="Cadastrar"
            bgColor="#79D279"
            type="submit"
            icon={I.RiCheckboxCircleLine}
          />
          <Button02
            label="Cancelar"
            bgColor="#FF6666"
            onClick={toggleVisible}
            icon={I.RiCloseLine}
          />
        </S.Footer>
      </S.Container>
    </Modal>
  )
}

export default RegisterAndUpdate