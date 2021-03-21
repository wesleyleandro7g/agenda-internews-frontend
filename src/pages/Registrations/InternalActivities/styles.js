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
export const Text = styled.h6`
  font-weight: bold;
  font-size: 12px;
`
