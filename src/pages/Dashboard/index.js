/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import api from '../../services/API'

import Layout from '../../components/layout'
import PieChart from '../../components/charts/piechart'
import BarChart from '../../components/charts/barchart'
import BarVertical from '../../components/charts/barverticalchart'
import Doughnut from '../../components/charts/doughnut'

import * as S from './styles'

const HandleDoughnutChart = ({ title, onChange, data, percentage }) => {
  return (
    <S.ChartWrapper2>
      <S.ChartHeader>
        <S.ChartTitle> {title} </S.ChartTitle>
      </S.ChartHeader>
      <S.ChartMain>
        <Doughnut data={data} percentage={percentage} />
      </S.ChartMain>
    </S.ChartWrapper2>
  )
}

const HandlePieChartCards = ({ title, data, onChange }) => {
  const COLORS = [
    '#006699',
    '#006666',
    '#669999',
    '#339966',
    '#33cccc',
    '#0099cc',
    '#12406d',
    '#80ffff',
    '#009933',
    '#66a6e5',
    '#00C49F',
    '#1affd5',
    '#1a5999'
  ]

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
          <PieChart data={data} COLORS={COLORS} />
        </S.ChartContent>
        <S.ChartInfo>
          {data.map((item, index) => (
            <S.ChartInfoWrapperText key={item.id}>
              <S.ChartInfoColor color={COLORS[index]} />
              <S.ChartInfoText> {item.nome} </S.ChartInfoText>
            </S.ChartInfoWrapperText>
          ))}
        </S.ChartInfo>
      </S.ChartMain>
    </S.ChartWrapper>
  )
}

const HandleBarVerticalChart = ({ data }) => {
  return (
    <S.ChartWrapperBarHorizontal>
      <S.ChartHeader>
        <S.ChartTitle> Clientes por cidade </S.ChartTitle>
      </S.ChartHeader>
      <S.MainBarChart>
        <BarVertical data={data} />
      </S.MainBarChart>
    </S.ChartWrapperBarHorizontal>
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
  const [attendencesRealized, setAttendencesRealized] = useState([])

  const user = localStorage.getItem('user-name')
  const sectorID = localStorage.getItem('user-sector-id')
  const supportID = localStorage.getItem('support-id')

  useEffect(() => {
    if (sectorID == 1) {
      handleCallApiManager()
    } else {
      handleCallApi()
    }
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

    api.get(`/dashboard/attendences-month/${supportID}`).then(res => {
      setAttendencesRealized(res.data.Data)
      console.log(res.data.Data)
    })
  }

  function handleCallApiManager() {
    api.get('/dashboard/manager/activities').then(res => {
      setClientsForInternalActivities(res.data.Data)
    })

    api.get('/dashboard/manager/industries').then(res => {
      setClientsForIndustries(res.data.Data)
    })

    api.get('/dashboard/manager/attendences').then(res => {
      setAttendencesForType(res.data.Data)
    })

    api.get('/dashboard/manager/attendences-month').then(res => {
      setAttendencesRealized(res.data.Data)
      console.log(res.data.Data)
    })
  }

  // function handleSelectDate(e) {
  //   console.log(e.target.value)
  // }

  return (
    <Layout page={`Bem vindo(a), ${user}.`}>
      <S.Container>
        {/* <S.SubHeader>
          <h6>Você possui 5 novas solicitações de atendimento</h6>
          <S.ItemsRigthSubHeader></S.ItemsRigthSubHeader>
        </S.SubHeader> */}

        <S.ContentPieCharts>
          <HandlePieChartCards
            title="Clientes por ramo de atividade"
            data={clientsForIndustries}
          />
          <HandlePieChartCards
            title="Clientes por atividade interna"
            data={clientsForInternalActivities}
          />
        </S.ContentPieCharts>

        <S.ContentBarCharts>
          <HandleBarChartCard data={attendencesForType} />
        </S.ContentBarCharts>

        <S.ContentOtherCharts>
          <HandleDoughnutChart
            title="Clientes atendindos este mês"
            data={attendencesRealized}
          />
          <HandleBarVerticalChart data={clientsForInternalActivities} />
        </S.ContentOtherCharts>
      </S.Container>
    </Layout>
  )
}

export default Dashboard
