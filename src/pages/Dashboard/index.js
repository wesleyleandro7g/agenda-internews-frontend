/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import api from '../../services/API'

import Layout from '../../components/layout'
import PieChart from '../../components/charts/piechart'
import BarChart from '../../components/charts/barchart'
import BarVertical from '../../components/charts/barverticalchart'

import * as S from './styles'

const HandlePieChartCards = ({ title, data, onChange }) => {
  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle> {title} </S.ChartTitle>
        {onChange && (
          <S.ChartInput
            type="month"
            defaultValue="2020-12"
            onChange={onChange}
          />
        )}
      </S.ChartHeader>
      <S.ChartMain>
        <S.ChartContent>
          <PieChart data={data} />
        </S.ChartContent>
        <S.ChartInfo> </S.ChartInfo>
      </S.ChartMain>
    </S.ChartWrapper>
  )
}

const HandleLineChart = ({ data }) => {
  return (
    <S.ChartWrapper>
      <S.ChartHeader>
        <S.ChartTitle> Clientes por atividade </S.ChartTitle>
      </S.ChartHeader>
      <S.MainBarChart>
        <BarVertical data={data} />
      </S.MainBarChart>
    </S.ChartWrapper>
  )
}

const HandleBarChartCard = ({ data }) => {
  return (
    <S.BarChartContainer>
      <S.ChartHeader2>
        <S.ChartTitle> OS por tipo de atendimento </S.ChartTitle>
      </S.ChartHeader2>
      <S.MainBarChart>
        <BarChart data={data} />
      </S.MainBarChart>
    </S.BarChartContainer>
  )
}

const Dashboard = () => {
  const [
    clientsForInternalActivities,
    setClientsForInternalActivities
  ] = useState([])
  const [clientsForIndustries, setClientsForIndustries] = useState([])
  const [attendencesForType, setAttendencesForType] = useState([])
  const user = localStorage.getItem('user-name')
  const supportID = localStorage.getItem('support-id')

  useEffect(() => {
    handleCallApi()
  }, [])

  function handleCallApi() {
    api.get(`/dashboard/activities/${supportID}`).then(res => {
      setClientsForInternalActivities(res.data.Data)
    })

    api.get(`/dashboard/industries/${supportID}`).then(res => {
      setClientsForIndustries(res.data.Data)
    })

    api.get(`/dashboard/attendences/${supportID}`).then(res => {
      setAttendencesForType(res.data.Data)
    })
  }

  // function handleSelectDate(e) {
  //   console.log(e.target.value)
  // }

  return (
    <Layout page={`Bem vindo(a), ${user}.`}>
      <S.Container>
        <S.SubHeader>
          <h6>Você possui 5 novas solicitações de atendimento</h6>
          <S.ItemsRigthSubHeader></S.ItemsRigthSubHeader>
        </S.SubHeader>
        <S.ContentCharts>
          <HandlePieChartCards
            title="Atendimentos mensais"
            data={clientsForIndustries}
          />
          <HandlePieChartCards
            title="Clientes por ramo de atividade"
            data={clientsForIndustries}
          />
          <HandleLineChart data={clientsForInternalActivities} />
        </S.ContentCharts>

        <S.ContentBarCharts>
          <HandleBarChartCard data={attendencesForType} />
        </S.ContentBarCharts>
      </S.Container>
    </Layout>
  )
}

export default Dashboard
