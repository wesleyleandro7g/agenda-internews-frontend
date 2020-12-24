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
      <Doughnut data={data} percentage={percentage} />
    </S.ChartWrapper2>
  )
}

const HandlePieChartCards = ({ title, data, onChange }) => {
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#cc33ff',
    '#666600',
    '#6600cc',
    '#006666',
    '#009900',
    '#ff6600',
    '#333333',
    '#ffff66',
    '#ff99cc',
    '#ff3333',
    '#009933',
    '#660033'
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
  const [attendencesRealized, setAttendencesRealized] = useState([])
  const user = localStorage.getItem('user-name')
  const sectorID = localStorage.getItem('user-sector-id')
  const supportID = localStorage.getItem('support-id')

  useEffect(() => {
    console.log(sectorID)
    if (sectorID == 1) {
      handleCallApiManager()
      console.log('Manager!')
    } else {
      handleCallApi()
      console.log('Other')
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
        <S.ContentCharts>
          <HandleDoughnutChart
            title="Clientes atendindos este mês"
            data={attendencesRealized}
          />
          <HandlePieChartCards
            title="Clientes por ramo de atividade"
            data={clientsForIndustries}
          />
          <HandleBarVerticalChart data={clientsForInternalActivities} />
        </S.ContentCharts>

        <S.ContentBarCharts>
          <HandleBarChartCard data={attendencesForType} />
        </S.ContentBarCharts>
      </S.Container>
    </Layout>
  )
}

export default Dashboard
