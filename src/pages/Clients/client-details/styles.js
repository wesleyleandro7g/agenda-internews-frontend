import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => (props.fullScreen ? '100%' : '70%')};
  height: ${props => (props.fullScreen ? '100%' : '80%')};

  background-color: #fff;

  border-radius: 3px;

  -webkit-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    width: 98%;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  border-radius: 3px 3px 0 0;

  background: rgb(99, 176, 194);
  background: linear-gradient(
    90deg,
    rgba(99, 176, 194, 1) 0%,
    rgba(3, 76, 111, 1) 100%
  );
`
export const HeaderItemsWrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Main = styled.div`
  width: 100%;
  height: 80%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const SectionTwo = styled.div`
  width: 40%;
  height: 100%;
  border-left: 1px solid #d9d9d9;
  padding: 0 2%;

  @media (max-width: 800px) {
    width: 100%;
    border-left: 0;
    margin: 5px 0;
    padding: 2%;
    background-color: #d9d9d9;
  }
`
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  color: #fff;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`
export const ToolsTitle = styled.h6`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
`
