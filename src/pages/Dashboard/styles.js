import styled from 'styled-components'
import Scroll from 'react-scrollbar'

export const Container = styled(Scroll)`
  width: 100%;
  height: 90vh;
`
export const SubHeader = styled.div`
  width: 100%;
  height: 5vh;
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
export const ContentPieCharts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const ContentOtherCharts = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`
export const ChartWrapper = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 2px;
  background-color: #fff;

  :hover {
    -webkit-box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 800px) {
    margin: 5px 0;
  }
`
export const ChartWrapper2 = styled(ChartWrapper)`
  width: 30%;
  margin-right: 10px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    margin: 5px 0;
  }
`
export const ChartWrapperBarHorizontal = styled(ChartWrapper)`
  width: 70%;
`
export const ChartHeader = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`
export const ChartHeader2 = styled(ChartHeader)`
  height: 10%;
`
export const ChartMain = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ChartContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChartInfo = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
export const ChartInfoWrapperText = styled.div`
  display: flex;
  padding: 0 1%;
`
export const ChartInfoText = styled.h6`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
  text-transform: uppercase;
`
export const ChartInfoColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${props => props.color};
`
export const ChartTitle = styled.h6`
  font-size: 14px;
  font-weight: 400;
`
export const ChartInput = styled.input`
  width: 45%;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  padding: 0 2%;
  background-color: #eee;
  color: #333;
`
export const LeftItemsWrapper = styled.div`
  width: 100%;
  height: 50vh;
`
export const RigthItemsWrapper = styled(LeftItemsWrapper)``

export const ContentBarCharts = styled.div`
  width: 100%;
  height: 40vh;
  margin: 10px 0;
`
export const BarChartContainer = styled(ChartWrapper)`
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    display: none;
  }
`
export const MainBarChart = styled.div`
  width: 100%;
  height: 90%;
`
