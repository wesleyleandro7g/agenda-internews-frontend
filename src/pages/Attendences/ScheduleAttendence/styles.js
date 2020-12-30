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
export const ModalMain = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px;
`
export const InputSchedule = styled.input`
  width: 45%;
  border: 0;
  outline: none;
  font-size: 14px;
  background-color: #eeeeee;
  padding-left: 5px;
  margin: 10px;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  align-items: flex-end;
  padding-bottom: 15px;
  grid-template-columns: repeat(2, 1fr);
`
export const Title = styled.h4`
  text-transform: uppercase;
`
