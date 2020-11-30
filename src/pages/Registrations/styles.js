import styled from 'styled-components'

import Scroll from 'react-scrollbar'

export const ScrollArea = styled(Scroll)`
  width: 100%;
  height: 90vh;
`
export const Content = styled.section`
  width: 100%;
  padding: 10px;
  padding-bottom: 70px;
  margin-bottom: 3px;
  background-color: #ffffff;
  position: relative;
`
export const ContentSimple = styled(Content)`
  width: 98%;
  background-color: #ffffff;
`
export const ContentGrig = styled(Content)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  background-color: transparent;
`
export const ContentHeader = styled.div`
  width: 100%;
  margin-bottom: 15px;
`
export const ScopeWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const OptionWrapper = styled.div`
  margin-top: 15px;
`
export const TitleInputOptions = styled.h6`
  font-size: 12px;
  font-weight: 500;
`
export const RegisterButtonWrapper = styled.div`
  width: 100px;
  position: absolute;
  bottom: 10px;
  right: 2%;
`
export const CityInputWrapper = styled.div`
  display: flex;
`
