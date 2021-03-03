import React from 'react'
import I from '../../utils/Icons'

import * as S from './styles'

const List = ({ description, onDelete, onUpdate }) => {
  return (
    <S.Container>
      <S.Text> {description} </S.Text>
      <S.Content>
        <I.RiEditBoxLine
          style={{ marginRight: 5, cursor: 'pointer' }}
          onClick={onUpdate}
        />
        {onDelete && (
          <I.RiDeleteBin7Line
            style={{ marginLeft: 5, cursor: 'pointer' }}
            onClick={onDelete}
          />
        )}
      </S.Content>
    </S.Container>
  )
}

export default List
