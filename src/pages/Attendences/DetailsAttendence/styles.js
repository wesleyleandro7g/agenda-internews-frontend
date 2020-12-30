import styled from 'styled-components'

export const ModalContent = styled.div`
  width: 40%;
  height: 50%;
  padding: 0 10px;
  background-color: #fff;

  @media (max-width: 800px) {
    width: 100%;
  }
`
export const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StatusContent = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.status === 1 ? '#79D279' : '#FFB84D')};
`
export const TextStatus = styled.h6`
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
`
export const ModalMain = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px;
`
export const Title = styled.h4`
  text-transform: uppercase;
`
export const TextDetailsModal = styled.h4`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  text-transform: uppercase;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(4, 1fr);
`
export const Span = styled.span`
  font-weight: bold;
`
