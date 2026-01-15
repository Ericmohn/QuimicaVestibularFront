import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BtnEnviar, NavLogin, SmallButton, StyledInput } from '../Login/styles'
import { cores } from '../../styles'
import { Container } from '@mui/material'
import api from '../../Api'

const ResetarSenha = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErro('')

    if (!senha || senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres')
      return
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem')
      return
    }

    try {
      await api.post(`/auth/reset-password/${token}`, {
        senha
      })

      setSucesso(true)

      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      console.error(err)
      setErro('Token inválido ou expirado')
    }
  }

  return (
    <Container>
      <NavLogin>
        <SmallButton to="/login" color={cores.laranjaClaro}>
          LOGIN
        </SmallButton>
      </NavLogin>

      {sucesso ? (
        <p>
          Senha redefinida com sucesso! Você será redirecionado para o login.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="senha">Nova senha:</label>
            <StyledInput
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha">Confirmar senha:</label>
            <StyledInput
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <BtnEnviar type="submit">Redefinir Senha</BtnEnviar>
        </form>
      )}
    </Container>
  )
}

export default ResetarSenha
