import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.div`
  position: ${props => (props.display ? 'absolute' : 'relative')};
  left: 0;
  width: ${props => (props.display ? '100%' : '30px')};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  transition: 200ms;
  color: ${props => (props.display ? '#000' : '#fff')};
  background-color: ${props => (props.display ? '#FFF' : 'transparent')};
`
export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  display: ${props => (props.display ? 'block' : 'none')};
  text-transform: uppercase;
`
export const RiSearchLine = styled(I.RiSearchLine)`
  cursor: pointer;
  margin: 0 ${props => (props.display ? '10px' : '5px')};
  font-size: 24px;
`
export const RiCloseLine = styled(I.RiCloseLine)`
  display: ${props => (props.display ? 'block' : 'none')};
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
`
