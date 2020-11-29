import styled from 'styled-components'
import Scroll from 'react-scrollbar'

import I from '../../utils/Icons'

export const FilterWrapper = styled.div`
  width: ${props => (props.toggle ? '25%' : '0')};
  transition: 200ms ease-out;
  background-color: #fafbfc;
  border: 1px solid #e1e5ea;
`
export const FilterMain = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => (props.toggle ? 'block' : 'none')};
  position: relative;
`
export const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 10px 0;
`
export const ScrollArea = styled(Scroll)`
  height: 50vh;
`
export const FilterItemWrapper = styled.div`
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e1e5ea;
`
export const FilterItemContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 10px;
  margin-top: 15px;
`
export const RiCloseLine = styled(I.RiCloseLine)`
  cursor: pointer;
  margin: 0 5px;
`
export const TextFilter = styled.h4`
  font-weight: 400;
`
export const FilterButton = styled.button`
  width: 15%;
  height: 100%;
  background-color: #797979;
`
export const InputWrapper = styled.div`
  width: 100%;
`
export const InputElement = styled.input`
  border: 0;
  outline: none;
  width: 85%;
  height: 100%;
  font-size: 14px;
  border-radius: 0;
  background-color: #eeeeee;
  padding-left: 5px;
`
export const TextInput = styled.h6`
  font-size: 12px;
  font-weight: 400;
`
