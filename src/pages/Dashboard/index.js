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

import { Months } from './data'
import * as S from './styles'

const HandleDoughnutChart = ({ title, onChange, data }) => {
  return (
    <S.ChartWrapper2>
      <S.ChartHeader>
        <S.ChartTitle> {title} </S.ChartTitle>
      </S.ChartHeader>
      <S.ContentAttendence>
        <S.ContentChartAttendence>
          <S.ChartWrapperPercentage>
            <Doughnut data={data} />
          </S.ChartWrapperPercentage>
          <S.InfoWrapper>
            <S.InfoWrapperDetail>
              <S.InfoTextBold>
                {data.length > 0 && data[0].value}
              </S.InfoTextBold>
              <S.InfoText>Atendidos</S.InfoText>
            </S.InfoWrapperDetail>
            <S.InfoWrapperDetail>
              <S.InfoTextBold>
                {data.length > 0 && data[1].value}
              </S.InfoTextBold>
              <S.InfoText>Sem atendimento</S.InfoText>
            </S.InfoWrapperDetail>
          </S.InfoWrapper>
        </S.ContentChartAttendence>
        {/* <S.ContentMainAttendence>
          <h6>Main</h6>
        </S.ContentMainAttendence> */}
      </S.ContentAttendence>
    </S.ChartWrapper2>
  )
}

const HandlePieChartCards = ({ title, data, onChange }) => {
  const COLORS = [
    '#8774f1',
    '#83d3fb',
    '#669999',
    '#339966',
    '#c758da',
    '#0099cc',
    '#12406d',
    '#80ffff',
    '#009933',
    '#66a6e5',
    '#00C49F',
    '#1affd5',
    '#1a5999',
    '#33ff77',
    '#cc00cc',
    '#ff4dff',
    '#ffff66',
    '#e6e600'
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
        <S.ChartTitle> Tipos de atendimento realizados </S.ChartTitle>
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
  const [clientsForCity, setClientsForCity] = useState([])
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
    })

    api.get(`/dashboard/cities/${supportID}`).then(res => {
      setClientsForCity(res.data.Data)
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

  function handleDate() {
    const date = new Date()

    const month = date.getMonth()
    const year = date.getFullYear()

    const correntDate = `${Months[month]} de ${year}`

    return correntDate
  }

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

        <S.ContentBarCharts>
          <HandleBarVerticalChart data={clientsForCity} />
        </S.ContentBarCharts>

        <S.ContentAttendenceChart>
          <HandleDoughnutChart
            title={`Atendimentos mês de ${handleDate()}`}
            data={attendencesRealized}
          />
        </S.ContentAttendenceChart>
      </S.Container>
    </Layout>
  )
}

export default Dashboard
