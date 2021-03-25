import styled from 'styled-components'

export const FilterContainer = styled.aside`
  width: 30%;
  height: 100%;

  display: ${props => (props.visible ? 'block' : 'none')};

  border-left: 1px solid #e6e6e6;
  background-color: #f2f2f2;
`
export const FilterContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 10px 5px;
`
export const FilterHeader = styled.div``
export const FilterMain = styled.div`
  width: 100%;
  height: 65%;

  padding: 20px;
`
export const FilterFooter = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 20px;
`
export const FilterTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  color: #333;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`
