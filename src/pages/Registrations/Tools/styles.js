import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const Container = styled.div``
export const ScrollArea = styled(Scroll)`
  height: 70vh;
`
export const HeaderWrapper = styled.div`
  padding: 10px 0;
`
export const ListWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 1px;
  text-align: start;
`
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30%;
  padding: 10px;
  background-color: #fff;
`
export const ContentHeader = styled.div`
  width: 100%;
  height: 20%;
`
export const ContentMain = styled.div`
  width: 100%;
  height: 40%;
`
export const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 40%;
`
export const Text = styled.h6`
  font-size: 12px;
  text-transform: uppercase;
`
