import styled from 'styled-components'

export const ModalContent = styled.div`
  width: 40%;
  height: 50%;
  padding: 0 10px;
  background-color: #fff;
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
  background-color: ${props =>
    props.status === 'Aberto' ? '#79D279' : '#FFB84D'};
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
export const TextDetailsModal = styled.h4`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(4, 1fr);
`
