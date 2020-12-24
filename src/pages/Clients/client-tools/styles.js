import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 80%;
  padding: 0 10px;
  background-color: #fff;
`
export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Main = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: flex-start;
  padding: 0 2%;
`
export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`
export const DetailTitle = styled.h6`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 10px 0;
`
export const DatailInfo = styled(DetailTitle)`
  font-weight: 400;
`
export const ToolsTitle = styled.h6`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
`
export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`
