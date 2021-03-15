import React from 'react'

import Modal from '../../../components/modal'
import CircleBtn from '../../../components/buttons/circle-button'

import I from '../../../utils/Icons'

import * as S from './styles'

const DetailsClient = ({ visible, onClose, data, openTools, openEdit }) => {
  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Header>
          <S.Title>{data.razao_social}</S.Title>

          <S.HeaderItemsWrapper>
            <CircleBtn icon={I.RiEditBoxLine} onClick={openEdit} />
            <CircleBtn icon={I.RiCloseLine} onClick={onClose} />
          </S.HeaderItemsWrapper>
        </S.Header>
        <S.Main>
          <S.SectionOne>
            <S.SectionInfoOne>
              <S.SectionDataInfoTitle>
                <S.DetailTitle>razão social</S.DetailTitle>
                <S.DetailTitle>cnpj</S.DetailTitle>
                <S.DetailTitle>cidade</S.DetailTitle>
                <S.DetailTitle>endereço</S.DetailTitle>
                <S.DetailTitle>ramo de atividade</S.DetailTitle>
              </S.SectionDataInfoTitle>
              <S.SectionDataInfoDetail>
                <S.DatailInfo>: {data.razao_social}</S.DatailInfo>
                <S.DatailInfo>: {data.cnpj}</S.DatailInfo>
                <S.DatailInfo>: {data.cidade.descricao}</S.DatailInfo>
                <S.DatailInfo>: {data.endereco}</S.DatailInfo>
                <S.DatailInfo>: {data.atividade.descricao}</S.DatailInfo>
              </S.SectionDataInfoDetail>
            </S.SectionInfoOne>
            <S.SectionInfoTwo>
              <S.SectionDataInfoTitle>
                <S.DetailTitle>suporte</S.DetailTitle>
                <S.DetailTitle>id no sistema</S.DetailTitle>
                <S.DetailTitle>id no controle OS</S.DetailTitle>
                <S.DetailTitle>Quantidade de acessos</S.DetailTitle>
                <S.DetailTitle>Quantidade de empresas</S.DetailTitle>
                <S.DetailTitle>Quantidade de bancos</S.DetailTitle>
                <S.DetailTitle>mensalidade</S.DetailTitle>
              </S.SectionDataInfoTitle>
              <S.SectionDataInfoDetail>
                <S.DatailInfo>: {data.suporte.nome}</S.DatailInfo>
                <S.DatailInfo>: {data.identificador_servidor}</S.DatailInfo>
                <S.DatailInfo>: {data.identificador_internews}</S.DatailInfo>
                <S.DatailInfo>: {data.quantidade_acessos}</S.DatailInfo>
                <S.DatailInfo>: {data.quantidade_empresas}</S.DatailInfo>
                <S.DatailInfo>: {data.quantidade_bancos}</S.DatailInfo>
                <S.DatailInfo>: {data.mensalidade}</S.DatailInfo>
              </S.SectionDataInfoDetail>
            </S.SectionInfoTwo>
          </S.SectionOne>
          <S.SectionTwo>
            <S.SectionToolsHeader>
              <S.ToolsTitle>Ferramentas</S.ToolsTitle>
            </S.SectionToolsHeader>
            <S.SectionToolsMain>
              {data.ferramentas.map(item => (
                <S.DatailInfo key={item.id}>
                  &there4; {item.descricao}
                </S.DatailInfo>
              ))}
            </S.SectionToolsMain>
          </S.SectionTwo>
        </S.Main>
      </S.Container>
    </Modal>
  )
}

export default DetailsClient
