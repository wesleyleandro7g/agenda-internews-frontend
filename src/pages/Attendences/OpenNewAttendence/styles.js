import styled from 'styled-components'
import Scroll from 'react-scrollbar'

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
export const ModalMainGridDuo = styled(ModalMain)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 5px;
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
export const ItemsRightTop = styled.div`
  height: 90%;
`
export const InputRequesterName = styled(InputNewAttendence)``
export const ModalFooter = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(2, 1fr);
`
