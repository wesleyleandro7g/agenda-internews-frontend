import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  height: 70%;

  border-radius: 3px;

  background-color: #fff;

  -webkit-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    width: 100%;
    height: 80%;
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
export const Main = styled.div`
  width: 100%;
  height: 70%;

  padding: 20px;

  @media (max-width: 800px) {
    height: 80%;
  }
`
export const ModalMainGrid = styled(Main)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 5px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 15px;

  @media (max-width: 800px) {
    height: 10%;
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
export const SubTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`
