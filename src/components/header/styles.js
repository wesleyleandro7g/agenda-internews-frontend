import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.header`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0%;
  padding: 0 10px;

  background-color: #fff;

  border-bottom: 1px solid #dadada;

  @media (max-width: 800px) {
    display: none;
  }
`
export const ContainerMobile = styled(Container)`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    height: 56px;
    background-color: #040e18;
    position: relative;
  }
`
export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
`
export const Avatar = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border: 0;
  outline: none;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`
export const AvatarText = styled.h6`
  font-size: 12px;
  color: #fff;
`
export const MenuIcon = styled(I.RiMenuLine)`
  color: #000;
  cursor: pointer;
  font-size: 20px;

  @media (max-width: 800px) {
    color: #fff;
    font-size: 24px;
    margin-right: 32px;
  }
`
export const AlertIcon = styled(I.RiAlertLine)`
  color: #cccc00;
  cursor: pointer;
  margin-right: 15px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
  color: #000;
  text-transform: uppercase;

  @media (max-width: 800px) {
    color: #fff;
    font-size: 16px;
  }
`
