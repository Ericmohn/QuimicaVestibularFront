import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { BtnCancelaAssinatura, HeaderPerfil, InfoUser } from './styles'
import NavBarUsuario from '../../components/BarraNavegacao'
import FormularioCadastro from './FormularioCadastro'
import CardForm from './Pagamento'
import { BotaoIrSumario } from '../../components/Botao/styles'
import CarouselSection from '../../components/LandingPage/carousel_ladingpage'
import Aviso1 from '../../components/LandingPage/aviso1'
import imagemTutorial from '../Perfil/Formularios/Ativo 1.jpg'

const Perfil = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          window.location.replace('/')
          return
        }

        const response = await axios.get('/user/perfil', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUserInfo(response.data)
      } catch (error) {
        console.error('Erro ao obter perfil:', error)
      }
    }

    fetchUserProfile()
  }, [])

  const cancelarAssinatura = async () => {
    try {
      const res = await fetch('/mercadopago/cancelar-assinatura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preapprovalId: userInfo.assinaturaId
        })
      })

      const data = await res.json()

      if (data.success) {
        alert('Assinatura cancelada com sucesso!')
        window.location.reload()
      } else {
        alert('Erro ao cancelar assinatura')
      }
    } catch (error) {
      console.error(error)
      alert('Erro de conexão com o servidor')
    }
  }

  return (
    <div>
      <NavBarUsuario />
      <Container>
        <HeaderPerfil>
          <h2>Informações do Usuário</h2>
        </HeaderPerfil>

        {userInfo ? (
          <>
            <p>Nome: {userInfo.nome}</p>
            <p>Email: {userInfo.email}</p>
          </>
        ) : (
          <p>Carregando informações...</p>
        )}

        {userInfo && userInfo.assinatura === 'true' ? (
          <InfoUser>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Status da Assinatura: Ativa
            </p>

            <CarouselSection />
            <Aviso1 />

            <BotaoIrSumario to="/Sumario">
              Acessar lista de lições
            </BotaoIrSumario>

            <img
              src={imagemTutorial}
              alt="Tutorial"
              style={{ marginBottom: '60px' }}
            />

            <BtnCancelaAssinatura onClick={cancelarAssinatura}>
              Cancelar Assinatura
            </BtnCancelaAssinatura>
          </InfoUser>
        ) : (
          <>
            {!userInfo?.cpf && (
              <FormularioCadastro userToken={localStorage.getItem('token')} />
            )}

            {userInfo?.cpf && (
              <CardForm userToken={localStorage.getItem('token')} />
            )}
          </>
        )}
      </Container>
    </div>
  )
}

export default Perfil
