import styled from 'styled-components'

export const Container = styled.div``
export const ContainLoader = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainSubHeader = styled.div`
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-gap: 30px;
  align-items: center;

  padding: 0 10px;

  background-color: #eeeeee;

  @media (max-width: 800px) {
    display: none;
  }
`
export const ScrollArea = styled.div`
  width: 100%;
  height: 70vh;

  overflow: auto;

  @media (max-width: 800px) {
    height: 80vh;
  }
`
export const Title = styled.h6`
  font-weight: bold;
  font-size: 12px;
`
