import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${props => props.bgColor};
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 35px;
  color: #fff;
  transition: opacity 200ms;
  :hover {
    opacity: 80%;
  }
`
export const Text = styled.h5`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`
