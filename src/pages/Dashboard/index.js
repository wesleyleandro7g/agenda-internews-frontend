import React from 'react'

import Layout from '../../components/layout'
import PieChart from '../../components/charts/piechart'
import BarChart from '../../components/charts/barchart'
import BarVertical from '../../components/charts/barverticalchart'

import { atendimentosMensais, osRealizada, dataBarChart } from './dataTemp'
import * as S from './styles'

const HandlePieChartCards = ({ title, data, onChange }) => {
  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle> {title} </S.ChartTitle>
        <S.ChartInput type="month" defaultValue="2020-12" onChange={onChange} />
      </S.ChartHeader>
      <S.ChartMain>
        <S.ChartContent>
          <PieChart data={data} />
        </S.ChartContent>
        <S.ChartInfo></S.ChartInfo>
      </S.ChartMain>
    </S.ChartWrapper>
  )
}

const HandleLineChart = () => {
  return (
    <S.ChartWrapper>
      <BarVertical />
    </S.ChartWrapper>
  )
}

const HandleBarChartCard = ({ data }) => {
  return (
    <S.BarChartContainer>
      <S.ChartHeader>
        <S.ChartTitle> Os por tipo de atendimento </S.ChartTitle>
        <S.ChartInput type="month" defaultValue="2020-12" />
      </S.ChartHeader>
      <S.MainBarChart>
        <BarChart data={data} />
      </S.MainBarChart>
    </S.BarChartContainer>
  )
}

const Dashboard = () => {
  function handleSelectDate(e) {
    console.log(e.target.value)
  }
  return (
    <Layout page="Bem vindo(a), Jarbas.">
      <S.Container>
        <S.SubHeader>
          <h6>Você possui 5 novas solicitações de atendimento</h6>
          <S.ItemsRigthSubHeader>
            <h6>T</h6>
          </S.ItemsRigthSubHeader>
        </S.SubHeader>
        <S.ContentCharts>
          <HandlePieChartCards
            title="Atendimentos mensais"
            data={atendimentosMensais}
            onChange={e => handleSelectDate(e)}
          />
          <HandlePieChartCards
            title="Os realizadas"
            data={osRealizada}
            onChange={e => handleSelectDate(e)}
          />
          <HandleLineChart />
        </S.ContentCharts>

        <S.ContentBarCharts>
          <S.LeftItemsWrapper></S.LeftItemsWrapper>
          <S.RigthItemsWrapper>
            <HandleBarChartCard data={dataBarChart} />
          </S.RigthItemsWrapper>
        </S.ContentBarCharts>
      </S.Container>
    </Layout>
  )
}

export default Dashboard
