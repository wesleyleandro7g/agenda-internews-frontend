import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.div`
  width: ${props => (props.display ? '350px' : '30px')};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  transition: 200ms;
  background-color: ${props => (props.display ? '#FFF' : 'transparent')};
`
export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 0.6rem;
  display: ${props => (props.display ? 'block' : 'none')};
  text-transform: uppercase;
`
export const RiSearchLine = styled(I.RiSearchLine)`
  cursor: pointer;
  margin: 0 5px;
`
export const RiCloseLine = styled(I.RiCloseLine)`
  display: ${props => (props.display ? 'block' : 'none')};
  cursor: pointer;
  margin: 0 5px;
`
