import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: ${props => (props.fullScreen ? '100%' : '70%')};
  height: ${props => (props.fullScreen ? '100%' : '80%')};

  border-radius: 3px;

  background-color: #fff;

  -webkit-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.75);

  @media (max-width: 800px) {
    width: 100%;
  }
`
export const ModalHeader = styled.div`
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
export const ModalHeaderLeftItems = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalMain = styled.div`
  width: 100%;
  height: 90%;

  padding: 0 5px;
`
export const ModalScrollArea = styled.div`
  width: 100%;
  height: 90%;

  overflow: auto;

  @media (max-width: 800px) {
    height: 100%;
  }
`
export const ModalListWrapper = styled.button`
  width: 100%;
  height: ${props => (props.reduce ? '40px' : '55px')};

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  align-items: center;
  text-align: start;

  padding: 0 10px;
  border-bottom: 1px solid #e6e6e6;

  background-color: ${props => (props.reduce ? '#eee' : '#fff')};

  :first-child {
    border-top: ${props => (props.reduce ? '0' : '1px')} solid #e6e6e6;
  }

  :hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: 70px;
  }
`
export const ModalTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  color: #fff;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`
export const ModalSubTitle = styled.h5`
  font-size: 12px;
  font-weight: 600;

  color: #333;
`
export const ModalDescription = styled(ModalSubTitle)`
  font-weight: 400;
  text-transform: uppercase;
`
