import styled from 'styled-components'

export const Container = styled.button`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border: 0;
  outline: none;
  cursor: pointer;
  padding: 2px;
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 2px;
  color: #333;
  transition: 200ms ease;

  :hover {
    opacity: 0.7;
  }
`
export const Text = styled.h5`
  font-size: 10px;
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`
