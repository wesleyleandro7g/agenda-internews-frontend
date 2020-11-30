import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const Container = styled.div``
export const SubHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ItemsRigthSubHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ItemsLeftSubHeader = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScrollArea = styled(Scroll)`
  width: 100%;
  height: 70vh;
  margin-top: 10px;
`
export const ProvidersListWrapper = styled.button`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 1px;
  text-align: start;
`
export const ProvidersInfo = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr;
  align-items: center;
`
export const ProvidersInfoText = styled.h6`
  font-size: 12px;
  font-weight: 400;
`
export const ModalContent = styled.div`
  width: 40%;
  height: 50%;
  padding: 0 10px;
  background-color: #fff;
`
export const ModalContentBig = styled(ModalContent)`
  width: 60%;
  height: 70%;
`
export const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ModalHeaderBig = styled(ModalHeader)`
  height: 10%;
`
export const ModalMain = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px;
`
export const ModalMainBig = styled(ModalMain)`
  height: 90%;
  display: flex;
  margin-left: 0;
`
export const ModalBigContent = styled.div`
  width: 100%;
`
export const ClientSelected = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  background-color: #040e18;
`
export const ClientWrapper = styled.button`
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  align-items: center;
  margin-top: 5px;
  padding: 0 5px;
  background-color: #f1f1f1;
  text-align: start;
`
export const ClientText = styled.h6`
  font-size: 12px;
  font-weight: 400;
  color: #333;
`
export const TextClientSelected = styled.h6`
  font-size: 12px;
  font-weight: 500;
`
export const ScrollClients = styled(Scroll)`
  width: 90%;
  height: 90%;
  margin-top: 10px;
`
export const InputNewAttendence = styled.input`
  width: 90%;
  border: 0;
  outline: none;
  font-size: 12px;
  background-color: #eeeeee;
  padding-left: 5px;
  margin: 0;
`
export const ModalMainGridDuo = styled(ModalMain)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 5px;
`
export const ItemsRightTop = styled.div`
  height: 90%;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(4, 1fr);
`
export const ModalFooterBig = styled(ModalFooter)`
  height: 10%;
  grid-template-columns: repeat(2, 1fr);
`
