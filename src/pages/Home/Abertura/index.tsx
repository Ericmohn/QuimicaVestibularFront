import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Importar useNavigate
import { PaginaInicial } from './styles'
import LandingPage from '../../../components/LandingPage'

const Abertura = () => {
  const navigate = useNavigate() // Usar useNavigate para redirecionamento

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Redireciona para /user/perfil/assinatura se o usuário estiver logado
      navigate('/user/perfil/assinatura')
    }
  }, [navigate]) // Adicione navigate como dependência do useEffect

  // Renderiza o LandingPage apenas se o usuário não estiver logado
  return (
    <PaginaInicial>
      <LandingPage />
    </PaginaInicial>
  )
}

export default Abertura
