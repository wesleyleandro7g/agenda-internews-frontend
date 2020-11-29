import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
export const Contain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.state ? '180px' : '50px')};
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 200ms;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #e6e6e6;
`
