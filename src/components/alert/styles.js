import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: 60%;

  border-radius: 3px;

  background-color: #fff;
`
export const Header = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  background: rgb(255, 128, 128);
  background: linear-gradient(
    90deg,
    rgba(255, 128, 128, 1) 0%,
    rgba(255, 51, 51, 1) 100%
  );
`
export const Main = styled.main`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Footer = styled.footer`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;

  margin-left: 15px;
`
export const Text = styled.h5`
  font-size: 18px;
  font-weight: 400;
`
