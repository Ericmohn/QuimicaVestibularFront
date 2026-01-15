import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Botao = styled(Link)`
  background-color: ${(props) => props.color || 'black'};
  padding: 2vh 15vw;
  border: none;
  font-size: 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;
`

export const BotaoClaro = styled(Botao)`
  color: #fff;
  font-weight: bold;
`

export const BotaoIrSumario = styled(Botao)`
  color: #000;
  font-weight: bold;
  background-color: #d5df19;
  padding: 10px 10px;
`
