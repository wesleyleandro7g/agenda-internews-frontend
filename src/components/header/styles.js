import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  top: 0%;
  padding: 0 10px;
  background-color: #e6e6e6;
`
export const WrapperItems = styled.div`
  display: flex;
  align-items: center;
`
export const Avatar = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border: 0;
  outline: none;
  cursor: pointer;
`
export const MenuIcon = styled(I.RiMenuLine)`
  color: #000;
  cursor: pointer;
`
export const AlertIcon = styled(I.RiAlertLine)`
  color: #cccc00;
  cursor: pointer;
  margin-right: 15px;
`
export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: #000;
  text-transform: uppercase;
`
export const AvatarText = styled.h6`
  font-size: 10px;
  color: #fff;
`
