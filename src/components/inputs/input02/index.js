import React from 'react'

import { Container, Input } from './styles'

const Input02 = ({ label, onChange }) => {
  return (
    <Container>
      <Input type="text" placeholder=" " onChange={onChange} />
    </Container>
  )
}

export default Input02
