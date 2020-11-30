import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import * as S from './styles'

const Input04 = ({ Options, name }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <S.FilterItemWrapper>
      <S.Conte>
        <S.Select ref={inputRef}>
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
