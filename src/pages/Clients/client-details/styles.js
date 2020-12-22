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
  height: 90%;
  display: flex;
  align-items: center;
  padding: 0 2%;
`
export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const SectionOne = styled.div`
  width: 60%;
  height: 100%;
`
export const SectionTwo = styled.div`
  width: 40%;
  height: 100%;
  border-left: 1px solid #d9d9d9;
  padding: 0 2%;
`
export const SectionInfoOne = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
`
export const SectionInfoTwo = styled(SectionInfoOne)`
  height: 60%;
  border-top: 1px solid #d9d9d9;
  padding-top: 2%;
`
export const SectionDataInfoTitle = styled.div`
  width: 35%;
  height: 100%;
`
export const SectionDataInfoDetail = styled(SectionDataInfoTitle)`
  width: 65%;
`
export const SectionToolsHeader = styled.div`
  width: 100%;
`
export const SectionToolsMain = styled.div`
  width: 100%;
  margin: 0 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
