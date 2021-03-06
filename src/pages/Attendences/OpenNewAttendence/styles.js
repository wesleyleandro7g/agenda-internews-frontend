import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 80%;

  border-radius: 3px;

  background-color: #fff;

  @media (max-width: 800px) {
    width: 100%;
    height: 80%;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  border-radius: 3px 3px 0 0;

  background: rgb(99, 176, 194);
  background: linear-gradient(
    90deg,
    rgba(99, 176, 194, 1) 0%,
    rgba(3, 76, 111, 1) 100%
  );
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
export const Main = styled.div`
  width: 100%;
  height: 90%;

  display: flex;

  padding: 20px;

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
  height: 50px;

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
  font-size: 16px;
  font-weight: 500;
`
export const ScrollClients = styled.div`
  width: 90%;
  height: 90%;

  margin-top: 10px;

  overflow: auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`
export const ScrollReasons = styled.div`
  width: 90%;
  height: 60%;

  margin-top: 10px;
  overflow: auto;
`
export const InputNewAttendence = styled.input`
  width: 90%;
  height: 40px;

  border: 0;
  outline: none;

  font-size: 14px;
  text-transform: uppercase;

  padding-left: 5px;
  margin: 0;

  background-color: #eeeeee;

  @media (max-width: 800px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`
export const ClientWrapper = styled.button`
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: 0.5fr 3fr;
  align-items: center;
  text-align: start;

  margin-top: 2px;
  padding: 0 5px;
  border-radius: 5px;

  background-color: #383c48;
`
export const ClientText = styled.h6`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
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
// export const TitleCard = styled.h6`
//   font-size: 18px;

//   color: #333;

//   @media (max-width: 800px) {
//     font-size: 16px;
//   }
// `

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  color: #fff;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`
