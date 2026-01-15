import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderPerfil = styled.header`
  border-bottom: 1px solid black;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;
  display: flex;
  text-align: center;
  justify-content: center;
`

export const BarraSucesso = styled.div`
  max-height: 100vh;
  background-color: #00ff7b;
  color: #000;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid green;
  padding: 5px;
  font-size: 20px;
  text-align: center;
`
export const BarraFalha = styled.div`
  max-height: 100vh;
  background-color: #e61f1f;
  color: #000;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid #7d0505;
  padding: 5px;
  font-size: 20px;
  text-align: center;
`
export const BotaoIrAssinatura = styled(Link)`
  display: flex;
  width: 60%;
  justify-content: center;
  background-color: #5eafdc;
  border: none;
  padding: 2vw;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
`

export const DivAssinatura = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
