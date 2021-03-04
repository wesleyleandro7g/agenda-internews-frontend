import styled from 'styled-components'

export const Container = styled.button`
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 0;
  outline: none;

  padding: 2px;
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 2px;

  cursor: pointer;
  color: #333;

  transition: 200ms ease;

  background-color: ${props => props.bgColor};

  opacity: ${props => (props.disabled ? '0.4' : '1')};

  :hover {
    opacity: ${props => (props.disabled ? '0.4' : '0.7')};
  }
`
export const Text = styled.h5`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`
