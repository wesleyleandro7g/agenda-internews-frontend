import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 414px) {
    align-items: flex-start;
  }
`
export const Content = styled.div`
  width: 360px;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  padding: 0 30px;

  @media (max-width: 414px) {
    width: 80%;
    height: 350px;
    padding: 0 20px 30px 20px;
    margin-top: 10%;
  }
`
export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 414px) {
    height: 45%;
  }
`
export const InputWrapper = styled(LogoWrapper)`
  flex-direction: column;
`
export const Img = styled.img`
  width: 170px;
  height: 170px;

  @media (max-width: 414px) {
    width: 150px;
    height: 150px;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 45px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin-top: 30px;
`
