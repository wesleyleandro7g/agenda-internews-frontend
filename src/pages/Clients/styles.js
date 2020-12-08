import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const Container = styled.div``
export const SubHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ItemsRigthSubHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ScrollArea = styled(Scroll)`
  width: 100%;
  height: 70vh;
  margin-top: 10px;
`
export const ProvidersListWrapper = styled.button`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 1px;
  text-align: start;
`
export const ProvidersInfo = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`
export const ProvidersInfoText = styled.h6`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`
export const AnimationWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionsWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #d9d9d9;
`
export const Button = styled.button`
  background-color: transparent;
  margin: 0 5px;

  color: #797979;

  :hover {
    color: #040e18;
  }
`
export const Text = styled.h6`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  font-style: italic;
`
