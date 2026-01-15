// src/components/Header.js
import styled from 'styled-components'
import { BotaoIrSumario } from '../Botao/styles'

const HeaderWrapper = styled.header`
  background: #3abad263;
  padding: 20px;
  color: white;
  text-align: center;
`

const HeaderLanding = () => {
  return (
    <HeaderWrapper>
      <BotaoIrSumario to="/">Química Vestibular</BotaoIrSumario>
    </HeaderWrapper>
  )
}

export default HeaderLanding
