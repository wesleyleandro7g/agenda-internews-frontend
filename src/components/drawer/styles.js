import styled from 'styled-components'

export const Container = styled.aside`
  width: ${props => (props.state ? '180px' : '50px')};
  height: 100vh;
  background-color: #040e18;
  position: fixed;
  z-index: 1;
  top: 0%;
  left: 0%;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 200ms;
`
export const SectionTitle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.state ? '80px' : '50px')};
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 200ms;
  border-bottom: 1px solid #071a2c;
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
`
export const IconsWrapper = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: transparent;
`
export const Text = styled.h6`
  font-weight: 500;
  font-size: 12px;
  margin-left: 15px;
`
export const TextOptions = styled.h6`
  font-weight: 400;
  font-size: 12px;
  margin-left: 15px;
`
export const Img = styled.img`
  width: 110px;
  height: 110px;
  margin: 0;
  padding: 0;
`
export const Img2 = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
`
export const PrimaryOptionWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
  color: #fff;
  background-color: ${props => (props.select ? '#071a2c' : 'transparent')};
  outline: none;
  border: 0;
  border-left: 3px solid ${props => (props.select ? '#fff' : '#040e18')};
  cursor: pointer;

  :hover {
    background-color: #071a2c;
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
  background-color: ${props => (props.select ? '#071a2c' : 'transparent')};
  border-left: ${props => (props.state ? '3px' : '0')} solid
    ${props => (props.select ? '#fff' : '#040e18')};

  :hover {
    background-color: #071a2c;
  }
`
