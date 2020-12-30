import styled from 'styled-components'

export const ModalContent = styled.div`
  width: 40%;
  height: 50%;
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

  @media (max-width: 800px) {
    height: 10%;
  }
`
export const ModalMain = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px;

  @media (max-width: 800px) {
    height: 80%;
  }
`
export const ModalMainGrid = styled(ModalMain)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 5px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    height: 10%;
  }
`
export const Title = styled.h4`
  text-transform: uppercase;
`
