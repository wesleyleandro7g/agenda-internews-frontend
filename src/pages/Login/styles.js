import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`
export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const InputWrapper = styled(LogoWrapper)`
  flex-direction: column;
`
export const Img = styled.img`
  width: 170px;
  height: 170px;
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
