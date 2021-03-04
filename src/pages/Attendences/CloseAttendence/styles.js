import styled from 'styled-components'

export const ModalContent = styled.div`
  width: 60%;
  height: 70%;

  padding: 0 10px;
  border-radius: 3px;

  background-color: #e6e6e6;

  -webkit-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    width: 100%;
    height: 80%;
  }
`
export const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    height: 10%;
  }
`
export const ModalMain = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 10px;

  @media (max-width: 800px) {
    height: 80%;
  }
`
export const ScrollReasons = styled.div`
  width: 90%;
  height: 100%;

  margin-top: 10px;
  overflow: auto;
`
export const ModalMainGrid = styled(ModalMain)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 5px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 15px;

  @media (max-width: 800px) {
    height: 10%;
  }
`
export const Title = styled.h4`
  text-transform: uppercase;
`
export const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`
