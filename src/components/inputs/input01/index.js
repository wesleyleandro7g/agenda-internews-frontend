import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Container, Input, Label } from './styles'

const Input02 = ({ name, label, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Input
        ref={inputRef}
        placeholder=" "
        error={error}
        onFocus={clearError}
        onkeyup="return forceLower(this);"
        {...rest}
      />
      <Label error={error}>{label}</Label>
    </Container>
  )
}

export default Input02
