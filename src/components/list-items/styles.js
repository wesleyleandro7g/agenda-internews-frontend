import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;

  padding: 5px;
  margin-bottom: 1px;
  border-bottom: 1px solid #dadada;
  border-right: 1px solid #dadada;
  border-radius: 3px;

  background-color: #fff;

  :hover {
    background-color: #ffe;
  }
`

export const Content = styled.div`
  display: flex;
`
export const Text = styled.h6`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
`
