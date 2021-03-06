import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;

  padding: 0 10px;
  border-bottom: 1px solid #e6e6e6;

  background-color: #fff;

  :first-child {
    border-top: 1px solid #e6e6e6;
  }

  :hover {
    background-color: #f5f5f5;
  }
`

export const Content = styled.div`
  display: flex;
`
export const Text = styled.h6`
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
`
