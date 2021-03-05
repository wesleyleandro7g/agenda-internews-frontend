import styled from 'styled-components'
import I from '../../utils/Icons'

export const Container = styled.aside`
  width: ${props => (props.state ? '240px' : '65px')};
  height: 100vh;
  background-color: #2d323e;
  position: fixed;
  z-index: 1;
  top: 0%;
  left: 0%;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 200ms;

  @media (max-width: 800px) {
    display: ${props => (props.state ? 'none' : 'block')};
    width: 80%;
    position: absolute;
  }
`
export const SectionTitle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;

  margin-bottom: 10px;

  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 200ms;
  /* border-bottom: 1px solid #039be5; */

  -webkit-box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 0.5px 5px 0px rgba(0, 0, 0, 0.75);

  background-color: #383c48;

  @media (max-width: 800px) {
    height: 110px;
    justify-content: flex-start;
  }
`
export const SectionUser = styled.section`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionNav = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 800px) {
    height: 75%;
  }

  @media (max-width: 360px) {
    height: 70%;
  }
`
export const IconsWrapper = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: transparent;
`
export const Text = styled.h6`
  font-weight: 400;
  font-size: 13px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const Text2 = styled(Text)`
  font-size: 13px;
  margin-left: 20px;

  @media (min-width: 800px) {
    display: none;
  }
`
export const TextOptions = styled.h6`
  font-weight: 400;
  font-size: 13px;
  margin-left: 15px;
`
export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
`
export const ImgLarge = styled.img`
  width: 80%;
  height: 80%;
  margin: 0;
  padding: 0;
`
export const PrimaryOptionWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px 15px;
  color: ${props => (props.select ? '#fff' : '#d9d9d9')};
  background-color: ${props => (props.select ? '#039BE5' : 'transparent')};
  outline: none;
  border: 0;
  border-left: 3px solid ${props => (props.select ? '#fff' : '#2d323e')};
  cursor: pointer;

  :hover {
    background-color: ${props => (props.select ? '#039BE5' : '#282d38')};
  }

  @media (max-width: 800px) {
    padding: 15px;
  }
`
export const SecondaryOptionWrapper = styled(PrimaryOptionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :hover {
    background-color: transparent;
  }
`
export const SecondaryOptionsItemsWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px ${props => (props.state ? '10px' : '0')};
  background-color: transparent;
  color: #fff;
  background-color: ${props =>
    props.select && props.state ? '#039BE5' : 'transparent'};
  border-left: ${props => (props.state ? '3px' : '0')} solid
    ${props => (props.select ? '#fff' : '#2d323e')};

  :hover {
    background-color: ${props => (props.select ? '#039BE5' : '#282d38')};
  }
`
export const CloseButtonWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15%;
  }

  @media (max-width: 360px) {
    height: 20%;
  }
`
export const CloseButton = styled(I.RiArrowLeftSLine)`
  display: none;

  @media (max-width: 800px) {
    display: block;
    margin: 5%;
    font-size: 28px;
    color: #fff;
  }
`
export const UserDatailsMobileWrapper = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`
export const UserDatailsMobileTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
`
export const UserDatailsMobileDescription = styled(UserDatailsMobileTitle)`
  font-size: 10px;
  font-weight: 400;
  color: #fff;
  margin: 5px 2px;
`
