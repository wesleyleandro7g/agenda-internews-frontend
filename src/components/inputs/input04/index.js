import React from 'react'

import * as S from './styles'

const Input04 = ({ Options }) => {
  return (
    <S.FilterItemWrapper>
      <S.Conte>
        <S.Select>
          {Options.map(option => (
            <S.Option key={option.id} value={option.id}>
              {option.value}
            </S.Option>
          ))}
        </S.Select>
      </S.Conte>
    </S.FilterItemWrapper>
  )
}

export default Input04
