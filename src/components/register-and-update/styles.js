import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: ${props => (props.large ? '60%' : '50%')};

  display: flex;
  flex-direction: column;

  border-radius: 3px;

  background-color: #fff;
`
export const Header = styled.div`
  width: 100%;
  height: 20%;

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
export const Main = styled.div`
  width: 100%;
  height: 60%;

  padding: 20px;
`
export const Footer = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 20px;
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
