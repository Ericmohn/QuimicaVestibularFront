import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderSumario = styled.header`
  background-color: ${cores.azulHeader};
  display: flex;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 6;

  img {
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #fff;
  }
  h3 {
    background-color: ${cores.azulHeader};
  }
`
export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-right: 30px;
`
export const CabecalhoImg = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
