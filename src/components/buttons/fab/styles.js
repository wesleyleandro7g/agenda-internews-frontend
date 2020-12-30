import styled from 'styled-components'

export const Content = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`
export const Container = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  border: 0;
  outline: none;
  border-radius: 50%;
  color: #333;
  position: absolute;
  z-index: 10;
  bottom: 15px;
  right: 15px;
`
