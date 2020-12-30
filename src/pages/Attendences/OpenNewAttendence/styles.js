import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const ModalWrapper = styled.div`
  width: 60%;
  height: 70%;
  padding: 0 10px;
  background-color: #fff;

  @media (max-width: 800px) {
    width: 100%;
    height: 80%;
  }
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
export const MainGrid = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 5px;
`
export const MainWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  margin-left: 0;
  padding: 0 10px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
export const LeftWrapper = styled.div`
  width: 100%;
`
export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    display: ${props => (props.selected ? 'block' : 'none')};
  }
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

  @media (max-width: 800px) {
    width: 100%;
  }
`
export const TextClientSelected = styled.h6`
  font-size: 12px;
  font-weight: 500;
`
export const ScrollClients = styled(Scroll)`
  width: 90%;
  height: 90%;
  margin-top: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`
export const ScrollReasons = styled(Scroll)`
  width: 90%;
  height: 60%;
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

  @media (max-width: 800px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
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
  text-transform: uppercase;
`
export const ItemsRightTop = styled.div`
  height: 90%;

  @media (max-width: 800px) {
    padding: 15px 0;
  }
`
export const InputRequesterName = styled(InputNewAttendence)`
  margin: 0 2px;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(2, 1fr);
`
export const RequestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const TitleCard = styled.h6`
  @media (max-width: 800px) {
    font-size: 16px;
  }
`
