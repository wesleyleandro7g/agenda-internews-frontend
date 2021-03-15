import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: ${props => (props.display ? '82%' : '30px')};
  height: 65px;

  position: ${props => (props.display ? 'absolute' : 'relative')};
  right: 0;

  border-bottom: 1px solid #dadada;

  transition: 200ms;

  color: ${props => (props.display ? '#000' : '#fff')};
  background-color: ${props => (props.display ? '#FFF' : 'transparent')};

  @media (max-width: 800px) {
    width: ${props => (props.display ? '100%' : '30px')};
    left: 0;
  }
`
export const Input = styled.input`
  width: 100%;

  display: ${props => (props.display ? 'block' : 'none')};

  border: none;
  font-size: 14px;

  text-transform: uppercase;
`
export const RiSearchLine = styled(I.RiSearchLine)`
  cursor: pointer;
  margin: 0 ${props => (props.display ? '10px' : '5px')};
  font-size: 24px;
  color: #333;
`
export const RiCloseLine = styled(I.RiCloseLine)`
  display: ${props => (props.display ? 'block' : 'none')};
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
`
