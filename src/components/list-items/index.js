import React from 'react'
import I from '../../utils/Icons'

import * as S from './styles'

const List = ({ description, onDelete, onUpdate, description2 }) => {
  return (
    <S.Container>
      <S.ContentInfo>
        <S.Text> {description} </S.Text>
        <S.Text> {description2} </S.Text>
      </S.ContentInfo>
      <S.Content>
        {onUpdate && (
          <I.RiEditBoxLine
            style={{ marginRight: 5, cursor: 'pointer' }}
            onClick={onUpdate}
          />
        )}
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
