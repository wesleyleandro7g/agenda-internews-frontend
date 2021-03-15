import styled from 'styled-components'

export const Container = styled.div``
export const ScrollArea = styled.div`
  height: 80vh;
  overflow: auto;
`
export const InfoContainer = styled.div`
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  padding: 0 10px;

  background-color: #eeeeee;
`
export const ListWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 1px;
  text-align: start;
`
export const Info = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50%;
  padding: 10px;
  background-color: #fff;
`
export const ContentHeader = styled.div`
  width: 100%;
  height: 10%;
`
export const ContentMain = styled.div`
  width: 100%;
  height: 60%;
`
export const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 40%;
`
export const Text = styled.h6`
  font-weight: bold;
  font-size: 12px;
`
export const SupportInputWrapper = styled.div``
