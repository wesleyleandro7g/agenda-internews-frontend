import React from 'react'

import Modal from '../modal'
import Input03 from '../inputs/input03'
import Input04 from '../inputs/input04'
import Button02 from '../buttons/button02'
import CheckBox from '../inputs/checkbox'

import I from '../../utils/Icons'

import * as S from './styles'

const RegisterAndUpdate = ({
  visible,
  title,
  toggleVisible,
  state,
  users,
  contact,
  password,
  sector,
  large,
  block
}) => {
  return (
    <Modal visible={visible}>
      <S.Container large={large}>
        <S.Header>
          <S.Title> {title} </S.Title>
        </S.Header>

        <S.Main>
          <Input03 label="Descrição" name="descricao" type="text" />
          {contact && (
            <Input03
              label="Contato"
              name="contato"
              type="text"
              mask="(99) 9 9999-9999"
            />
          )}
          {password && <Input03 label="Senha" name="senha" type="text" />}
          {state && <Input04 name="id_estado" Options={state} />}
          {users && <Input04 name="id_usuario" Options={users} />}
          {sector && <Input04 name="id_setor" Options={sector} />}
          {block && (
            <CheckBox
              label="Desconsiderar no relatório de atendimento"
              onChange={block}
            />
          )}
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
