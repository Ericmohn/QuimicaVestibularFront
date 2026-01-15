// src/App.js
import React from 'react'
import { Header } from '../Header'
import CarouselSection from './carousel_ladingpage'
import InfoSection from './info_ladingpage'
import HeaderLanding from './header_ladingpage'
import { Container } from 'react-bootstrap'
import LicoesSection from './licoesSection'
import Aviso1 from './aviso1'
import Aviso2 from './aviso2'
import styled, { keyframes } from 'styled-components' // Importe keyframes para criar a animação

// Definindo a animação de fade-in usando keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); // Deslocamento menor para suavizar o movimento
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Definindo o StyledSection com ajustes para um visual mais harmonioso
const StyledSection = styled.section`
  border: 1px solid rgba(57, 204, 204, 0.2); /* Borda sutil com baixa opacidade */
  width: 100%;
  border-radius: 12px;
  margin: 30px 0; /* Aumenta o respiro entre as sections */
  padding: 30px; /* Mais espaço interno para destacar o conteúdo */
  animation-delay: 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #f7f9fa 0%,
    #e3f2f5 100%
  ); /* Gradiente suave */
  animation: ${fadeIn} 1.8s ease-out; /* Ajuste do tempo e do easing */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08); /* Sombra mais leve e suave para um efeito flutuante */

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* Transição suave para hover */

  &:hover {
    transform: translateY(-8px); /* Elevação sutil ao passar o mouse */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12); /* Aumenta a sombra para dar um destaque */
  }
  a {
    background-color: #73e794;
  }
`

function LandingPage() {
  return (
    <Container>
      <HeaderLanding />
      <StyledSection style={{ animationDelay: '0s' }}>
        <CarouselSection />
      </StyledSection>

      <StyledSection style={{ animationDelay: '0s' }}>
        <Aviso1 />
      </StyledSection>
      <StyledSection style={{ animationDelay: '0s' }}>
        <Aviso2 />
      </StyledSection>
    </Container>
  )
}

export default LandingPage
