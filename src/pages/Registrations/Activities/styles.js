import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const Container = styled.div``
export const ScrollArea = styled(Scroll)`
  height: 70vh;
`
export const HeaderWrapper = styled.div`
  padding: 10px 0;
`
export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  width: 100%;
  height: 40px;
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
  font-weight: 500;
  text-transform: uppercase;
`
