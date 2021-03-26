import React, { useState } from 'react'

import Modal from '../../../components/modal'
import CircleBtn from '../../../components/buttons/circle-button'
import ShowInfo from '../../../components/show-info'
import Tooltip from '../../../components/tooltip'

import I from '../../../utils/Icons'

import * as S from './styles'

const DetailsClient = ({ visible, onClose, data, openTools, openEdit }) => {
  const [fullScreen, setFullScreen] = useState(false)
  const sectorID = localStorage.getItem('user-sector-id')

  return (
    <Modal visible={visible}>
      <S.Container fullScreen={fullScreen}>
        <S.Header>
          <S.Title>{data.nome}</S.Title>

          <S.HeaderItemsWrapper>
            <CircleBtn
              icon={fullScreen ? I.RiFullscreenExitLine : I.RiFullscreenLine}
              onClick={() => setFullScreen(!fullScreen)}
              dataTip={
                fullScreen ? 'Sair do modo tela cheia' : 'Modo tela cheia'
              }
              dataDelayShow={1000}
            />
            {sectorID !== '2' && (
              <CircleBtn
                icon={I.RiEditBoxLine}
                onClick={openEdit}
                dataTip="Editar cadastro"
                dataDelayShow={1000}
              />
            )}
            <CircleBtn
              icon={I.RiCloseLine}
              onClick={onClose}
              dataTip="Fechar"
              dataDelayShow={1000}
            />
          </S.HeaderItemsWrapper>
        </S.Header>
        <S.Main>
          <ShowInfo title="Nome" value={data.nome} />
          <ShowInfo title="Razão social" value={data.razao_social} />
          <ShowInfo title="Cnpj" value={data.cnpj} />
          <ShowInfo title="Cidade" value={data.cidade.descricao} />
          <ShowInfo title="Endereço" value={data.endereco} />
          <ShowInfo
            title="Ramo de atividade"
            value={data.atividade.descricao}
          />
          <ShowInfo
            title="Atividade interna"
            value={data.atividade_interna && data.atividade_interna.descricao}
          />
          <ShowInfo
            title="ID do servidor"
            value={data.identificador_servidor}
          />
          <ShowInfo
            title="ID no controle OS"
            value={data.identificador_internews}
          />
          <ShowInfo
            title="Quantidade de acessos"
            value={data.quantidade_acessos}
          />
          <ShowInfo
            title="Quantidade de empresas"
            value={data.quantidade_empresas}
          />
          <ShowInfo
            title="Quantidade de banco de dados"
            value={data.quantidade_bancos}
          />
          <ShowInfo title="Versão do sistema" value={data.versao_internews} />
          <ShowInfo
            title="Suporte responsável"
            value={data.suporte.descricao}
          />
          <ShowInfo
            title="Valor da mensalidade"
            value={Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(data.mensalidade)}
          />
          <ShowInfo
            title="Dia do vencimento da mensalidade"
            value={data.vencimento_mensalidade}
          />

          {/* <S.SectionTwo>
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
          </S.SectionTwo>  */}
        </S.Main>
      </S.Container>

      <Tooltip />
    </Modal>
  )
}

export default DetailsClient
