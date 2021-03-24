import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%; */
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #d9d9d9;

  background: rgb(99, 176, 194);
  background: linear-gradient(
    90deg,
    rgba(99, 176, 194, 1) 0%,
    rgba(3, 76, 111, 1) 100%
  );

  @media (max-width: 800px) {
    display: none;
  }
`
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
  font-weight: 600;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-style: italic;
  color: #fff;
`
export const Description = styled.h6`
  font-weight: bold;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
`
