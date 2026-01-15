import React, { useEffect, useState } from 'react'
import PdfViewer from '../../../components/ExibirApostila'
import { Video } from '../../../components/Video'
import { Header } from '../../../components/Header'
import BotaoGrupos from '../../../components/BotaoGrupos'
import { Botao, BotaoIrSumario } from '../../../components/Botao/styles'
import { cores } from '../../../styles'
import { ExibirMensagem } from './styles'
import api from '../../../Api'

// =========================
// TIPOS
// =========================
type AssinaturaStatus = 'active' | 'pending' | 'inactive' | 'guest'

const L1: React.FC = () => {
  const [status, setStatus] = useState<AssinaturaStatus | null>(null)
  const [mensagem, setMensagem] = useState<string>('')

  // =========================
  // VERIFICA LOGIN + ASSINATURA
  // =========================
  useEffect(() => {
    const verificarAcesso = async (): Promise<void> => {
      const token = localStorage.getItem('token')

      // 🔓 Usuário não logado
      if (!token) {
        setStatus('guest')
        setMensagem(
          'Faça login ou cadastro para ter acesso à apostila e exercícios.'
        )
        return
      }

      try {
        const res = await api.get('/user/perfil')
        const assinaturaStatus: string = res.data.assinaturaStatus

        if (assinaturaStatus === 'active') {
          setStatus('active')
        } else if (assinaturaStatus === 'pending') {
          setStatus('pending')
          setMensagem(
            '⏳ Seu pagamento ainda está em processamento. Assim que for confirmado, o acesso será liberado automaticamente.'
          )
        } else {
          setStatus('inactive')
          setMensagem(
            'Sua assinatura está inativa. Assine para acessar a apostila e os exercícios.'
          )
        }
      } catch (error) {
        console.error('Erro ao verificar acesso:', error)
        setStatus('guest')
        setMensagem('Faça login para ter acesso à apostila e exercícios.')
      }
    }

    verificarAcesso()
  }, [])

  const customContent = (): JSX.Element => (
    <BotaoIrSumario to="/Sumario">Lições</BotaoIrSumario>
  )

  return (
    <div className="container">
      <Header customContent={customContent} />

      <Video />

      {/* ========================= */}
      {/* ACESSO LIBERADO */}
      {/* ========================= */}
      {status === 'active' && (
        <>
          <PdfViewer />
          <BotaoGrupos />
        </>
      )}

      {/* ========================= */}
      {/* BLOQUEADO */}
      {/* ========================= */}
      {status !== 'active' && status !== null && (
        <ExibirMensagem>
          <p>{mensagem}</p>

          {status === 'guest' && (
            <Botao to="/login" color={cores.laranja}>
              ACESSAR
            </Botao>
          )}

          {status === 'inactive' && (
            <Botao to="/assinatura" color={cores.laranja}>
              ASSINAR AGORA
            </Botao>
          )}
        </ExibirMensagem>
      )}
    </div>
  )
}

export default L1
