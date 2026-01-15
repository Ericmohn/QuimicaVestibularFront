import React, { useState, useEffect } from 'react'
import { Container, Spinner, Modal, Button } from 'react-bootstrap'
import NavBarUsuario from '../../components/BarraNavegacao'
import {
  BarraFalha,
  BarraSucesso,
  HeaderPerfil,
  BotaoIrAssinatura,
  DivAssinatura
} from './styles'
import imagemTutorial from '../Perfil/Formularios/Ativo 1.jpg'
import api from '../../Api'

const Assinatura = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [status, setStatus] = useState(null) // active | pending | inactive
  const [loadingCancel, setLoadingCancel] = useState(false)
  const [loadingReativar, setLoadingReativar] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [showModal, setShowModal] = useState(false)

  // =========================
  // LOAD INICIAL
  // =========================
  useEffect(() => {
    carregarDados()
  }, [])

  const carregarDados = async () => {
    try {
      const perfil = await api.get('/user/perfil')
      setUserInfo(perfil.data)
      setStatus(perfil.data.assinaturaStatus)
    } catch {
      setStatus('inactive')
    }
  }

  // =========================
  // CANCELAR
  // =========================
  const cancelarAssinatura = async () => {
    if (!window.confirm('Deseja realmente cancelar sua assinatura?')) return

    try {
      setLoadingCancel(true)
      await api.post('/assinatura/cancelar')
      setStatus('inactive')
      alert('Assinatura cancelada com sucesso')
    } catch {
      alert('Erro ao cancelar assinatura')
    } finally {
      setLoadingCancel(false)
    }
  }

  // =========================
  // REATIVAR
  // =========================
  const reativarAssinatura = async () => {
    try {
      setLoadingReativar(true)
      setMensagem('Redirecionando para o pagamento...')
      setShowModal(true)

      const res = await api.post('/assinatura/reativar')

      if (res.data.init_point) {
        window.location.href = res.data.init_point
      }
    } catch (err) {
      alert(err.response?.data?.msg || 'Erro ao reativar assinatura')
      setShowModal(false)
    } finally {
      setLoadingReativar(false)
    }
  }

  // =========================
  // LOADING GLOBAL
  // =========================
  if (!status) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    )
  }

  return (
    <div>
      <NavBarUsuario />
      <Container>
        {/* ========================= */}
        {/* ATIVA */}
        {/* ========================= */}
        {status === 'active' && (
          <DivAssinatura>
            <BarraSucesso>Assinatura ativa 🎉</BarraSucesso>

            <Container>
              <HeaderPerfil>
                <h2>Informações do Usuário</h2>
              </HeaderPerfil>

              {userInfo && (
                <>
                  <p>Nome: {userInfo.nome}</p>
                  <p>Email: {userInfo.email}</p>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={imagemTutorial}
                      alt="Tutorial"
                      style={{
                        display: 'block',
                        margin: '0 auto 60px',
                        maxWidth: '100%',
                        borderRadius: '12px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                      }}
                    />
                  </div>
                </>
              )}
            </Container>

            <BotaoIrAssinatura to="/Sumario">
              Ir para as lições
            </BotaoIrAssinatura>

            <button
              onClick={cancelarAssinatura}
              disabled={loadingCancel}
              style={{
                marginTop: '20px',
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                opacity: loadingCancel ? 0.6 : 1
              }}
            >
              {loadingCancel ? 'Cancelando...' : 'Cancelar Assinatura'}
            </button>
          </DivAssinatura>
        )}

        {/* ========================= */}
        {/* PENDENTE */}
        {/* ========================= */}
        {status === 'pending' && (
          <DivAssinatura>
            <BarraFalha>⏳ Pagamento pendente</BarraFalha>
            <p>
              Seu pagamento ainda está sendo processado.
              <br />
              Assim que for confirmado, sua assinatura será ativada
              automaticamente.
            </p>
          </DivAssinatura>
        )}

        {/* ========================= */}
        {/* INATIVA */}
        {/* ========================= */}
        {status === 'inactive' && (
          <DivAssinatura>
            <BarraFalha>Assinatura inativa</BarraFalha>
            <p>Sua assinatura não está ativa.</p>

            <button
              onClick={reativarAssinatura}
              disabled={loadingReativar}
              style={{
                marginTop: '20px',
                background: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                opacity: loadingReativar ? 0.6 : 1
              }}
            >
              {loadingReativar ? 'Aguarde...' : 'Reativar Assinatura'}
            </button>
          </DivAssinatura>
        )}

        {/* ========================= */}
        {/* MODAL */}
        {/* ========================= */}
        <Modal show={showModal} centered backdrop="static">
          <Modal.Body className="text-center">
            <Spinner animation="border" />
            <p className="mt-3">{mensagem}</p>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  )
}

export default Assinatura
