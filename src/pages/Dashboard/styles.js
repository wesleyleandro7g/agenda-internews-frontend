import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  overflow: auto;
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
export const ContentAttendenceChart = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`
export const ChartWrapper = styled.div`
  width: 100%;
  height: 80vh;

  border: 1.5px solid #d9d9d9;
  border-radius: 3px;

  background-color: #fff;

  @media (max-width: 800px) {
    margin: 5px 0;
  }
`
export const ChartWrapper2 = styled(ChartWrapper)`
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    margin: 5px 0;
  }
`
export const ChartMain = styled.div`
  height: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

// Gráfico com percentual de atendimento
export const ContentAttendence = styled(ChartMain)`
  flex-direction: row;
`
export const ContentChartAttendence = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 100%;

  border-right: 0.5px solid #d9d9d9;
`
export const ContentMainAttendence = styled.div`
  width: 60%;
  height: 100%;
`
export const ChartWrapperPercentage = styled.div`
  width: 100%;
  height: 80%;
`
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 20%;

  border-top: 0.5px solid #d9d9d9;
`
export const InfoWrapperDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  text-align: center;

  border-left: 0.5px solid #d9d9d9;
`
export const InfoText = styled.h6`
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;

  margin: 5px 0;
`
export const InfoTextBold = styled(InfoText)`
  font-size: 22px;
  font-weight: 500;
`

// Gráfico de barras vertical
export const ChartWrapperBarHorizontal = styled(ChartWrapper)`
  height: 80vh;
`
export const ChartHeader = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5px;

  border-bottom: 1px solid #d9d9d9;
`
export const ChartHeader2 = styled(ChartHeader)`
  height: 10%;
`

export const ChartContent = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5% 0;
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
  font-size: 16px;
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
  height: 80vh;
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
