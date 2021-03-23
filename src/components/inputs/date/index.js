import React, { useRef, useState, useEffect } from 'react'
import ReactDatePicker from 'react-datepicker'

import { useField } from '@unform/core'

import { Container, Label } from './styles'

import 'react-datepicker/dist/react-datepicker.css'

// interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
//   name: string;
// }

export default function DatePicker({ name, label, ...rest }) {
  const datepickerRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  const [date, setDate] = useState(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear()
      }
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Label>{label}</Label>

      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        {...rest}
      />
    </Container>
  )
}
