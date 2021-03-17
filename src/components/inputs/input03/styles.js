import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  width: 98%;

  position: relative;
  padding-top: 13px;

  border-radius: 3px;
`
export const Input = styled(InputMask)`
  width: 100%;
  height: 40px;

  border: 1px solid ${props => (props.error ? '#ffcccc' : '#FFFFFF')};
  border-radius: 3px;
  padding-left: 5px;
  outline: none;

  font-size: 14px;
  text-transform: uppercase;

  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-appearance: none;

  background-color: ${props => (props.error ? '#ffe6e6' : '#EEEEEE')};

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 12px;
    margin-top: 0;
  }
`
export const Label = styled.label`
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;

  margin: 20px 0 0 5px;

  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;

  font-weight: 500;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  color: ${props => (props.error ? '#ff6666' : '#333')};
`
