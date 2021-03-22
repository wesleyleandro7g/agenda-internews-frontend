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

  padding: 0 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const Footer = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const ScopeWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const OptionWrapper = styled.div`
  margin-top: 15px;
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
export const TitleInputOptions = styled.h6`
  font-size: 12px;
  font-weight: 500;
`
