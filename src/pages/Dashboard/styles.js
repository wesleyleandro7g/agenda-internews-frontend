import styled from 'styled-components'

export const Container = styled.div``
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
export const ContentCharts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-column-gap: 5px;
`
export const ChartWrapper = styled.div`
  width: 100%;
  height: 32vh;
  border-radius: 2px;
  background-color: #fff;

  :hover {
    -webkit-box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 13px -6px rgba(0, 0, 0, 0.75);
  }
`
export const ChartWrapper2 = styled(ChartWrapper)`
  width: 100%;
`
export const ChartHeader = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`
export const ChartHeader2 = styled(ChartHeader)`
  height: 10%;
`
export const ChartMain = styled.div`
  height: 80%;
  display: flex;
`
export const ChartContent = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChartInfo = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`
export const ChartInfoWrapperText = styled.div`
  width: 100%;
  display: flex;
  padding: 2%;
`
export const ChartInfoText = styled.h6`
  font-size: 10px;
  font-weight: 400;
  margin-left: 2%;
`
export const ChartInfoColor = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
`
export const ChartTitle = styled.h6`
  font-size: 10px;
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
  height: 50vh;
  margin: 10px 0;
`
export const BarChartContainer = styled(ChartWrapper)`
  width: 100%;
  height: 100%;
`
export const MainBarChart = styled.div`
  width: 100%;
  height: 90%;
`
