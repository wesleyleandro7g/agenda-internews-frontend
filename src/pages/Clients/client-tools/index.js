/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import api from '../../../services/API'

import Modal from '../../../components/modal'
import CheckBox from '../../../components/inputs/checkbox'
import Button02 from '../../../components/buttons/button02'

import I from '../../../utils/Icons'

import * as S from './styles'

const ClientTools = ({ visible, onClose, data }) => {
  const [tools, setTools] = useState([])
  const [toolsInUse, setToolsInUse] = useState([])
  const [object, setObject] = useState([])
  const [toolsAdded] = useState([])
  const [toolsRemoved] = useState([])

  useEffect(() => {
    handleTools()
    handleToolsInUse()
  }, [visible])

  useEffect(() => {
    handleToolsInUse()
  }, [toolsInUse])

  function handleTools() {
    api.get('/tools/index').then(response => setTools(response.data))
    api
      .get(`/tools/list-client-tools/${data.id}`)
      .then(response => setToolsInUse(response.data))
  }

  function handleToolsInUse() {
    setObject(
      tools.map(item => {
        toolsInUse.map(tool => {
          if (item.id === tool.id) {
            item.checked = true
          }
        })
        return item
      })
    )
  }

  function handleToolSelected(e, id) {
    tools.map(item => {
      if (item.id === id && item.checked) {
        item.checked = false
        toolsRemoved.push({ id_ferramenta: id })
      } else if (item.id === id) {
        toolsAdded.push({ id_ferramenta: id })
      }
    })
  }

  function handleActualizeTools() {
    console.log({ Adcionadas: toolsAdded })
    console.log({ Removidas: toolsRemoved })
  }

  return (
    <Modal visible={visible}>
      <S.Container>
        <S.Header>
          <S.Title>{data.razao_social}</S.Title>
          <I.RiCloseLine size={24} onClick={onClose} cursor="pointer" />
        </S.Header>
        <S.Main>
          <S.Grid>
            {object.map(item => (
              <CheckBox
                key={item.id}
                label={item.descricao}
                value={item.id}
                checked={item.checked}
                onChange={e => handleToolSelected(e.target.checked, item.id)}
              />
            ))}
          </S.Grid>
        </S.Main>
        <S.Footer>
          <Button02
            label="Salvar alterações"
            icon={I.RiCheckboxCircleLine}
            bgColor="#79D279"
            onClick={() => handleActualizeTools()}
          />
        </S.Footer>
      </S.Container>
    </Modal>
  )
}

export default ClientTools
