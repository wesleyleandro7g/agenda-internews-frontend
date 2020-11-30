import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: ${props => (props.visible ? 'block' : 'none')};
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
`
