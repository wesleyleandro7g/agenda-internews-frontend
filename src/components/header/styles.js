import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.header`
  width: 100%;
  height: 65px;

  display: flex;
  justify-content: space-between;

  top: 0%;

  background-color: #fff;

  -webkit-box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);

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
export const ContainItems = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  :first-child {
    border-right: 1px solid #dadada;
  }

  :last-child {
    border-left: 1px solid #dadada;
  }
`
export const WrapperItems = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 0 20px;

  border-left: 1px solid #dadada;
  border-right: 1px solid #dadada;

  :first-child {
    border-left: 0;
  }

  :last-child {
    border-right: 0;
  }
`
export const Avatar = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;
  margin-right: 10px;

  outline: none;

  background-color: #000;

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
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;

  @media (max-width: 800px) {
    color: #fff;
    font-size: 16px;
  }
`
export const UserName = styled.h6`
  text-transform: uppercase;
`
