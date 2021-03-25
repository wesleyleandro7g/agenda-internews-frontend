import React from 'react'

import Tooltip from '../tooltip'

import I from '../../utils/Icons'

import * as S from './styles'

const List = ({
  description,
  description2,
  description3,
  onDelete,
  onUpdate,
  onHistoric
}) => {
  return (
    <S.Container>
      <S.ContentInfo>
        <S.Text> {description} </S.Text>
        <S.Text> {description2} </S.Text>
        <S.Text> {description3} </S.Text>
      </S.ContentInfo>
      <S.Content>
        {onUpdate && (
          <I.RiEditBoxLine
            style={{ marginRight: 5, cursor: 'pointer' }}
            onClick={onUpdate}
            data-tip="Editar"
            data-delay-show={1000}
          />
        )}
        {onDelete && (
          <I.RiDeleteBin7Line
            style={{ marginLeft: 5, cursor: 'pointer' }}
            onClick={onDelete}
            data-tip="Deletar"
            data-delay-show={1000}
          />
        )}
        {onHistoric && (
          <I.RiMessage2Line
            style={{ marginLeft: 5, cursor: 'pointer' }}
            onClick={onHistoric}
            data-tip="Ver histórico"
            data-delay-show={1000}
          />
        )}
      </S.Content>

      <Tooltip />
    </S.Container>
  )
}

export default List
