import styled from 'styled-components'

export const Container = styled.button`
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: none;
  margin-left: 10px;

  border-radius: 50%;

  cursor: pointer;
  color: #fff;

  transition: 200ms ease;

  background-color: transparent;

  :hover {
    background-color: #0a658f;
  }
`
export const Text = styled.h5`
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`
