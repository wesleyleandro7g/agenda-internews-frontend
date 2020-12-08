import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'flex' : 'none')};
  width: 250px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  text-align: center;
  top: 50px;
  right: 10px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  -webkit-box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.75);
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 10px;
`
export const ConfigSection = styled.div`
  width: 100%;
`
export const Logout = styled.button`
  width: 100%;
  height: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
`
export const CloseIcon = styled(I.RiCloseLine)`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`
export const UserName = styled.h6`
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
  color: #fff;
`
export const UserEmail = styled(UserName)`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`
export const ButtonText = styled.h6`
  font-size: 12px;
`
