import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../../components/layout'
import Button03 from '../../components/buttons/button03'

import I from '../../utils/Icons'

import * as S from './styles'

const Reports = () => {
  const history = useHistory()

  return (
    <Layout page="Relatórios">
      <S.Container>
        <Button03
          title="Clientes não atendidos"
          icon={I.RiQuestionAnswerLine}
          onClick={() => history.push('/relatorios/atendimentos')}
        />
      </S.Container>
    </Layout>
  )
}

export default Reports
