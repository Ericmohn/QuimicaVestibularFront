import { useState } from 'react'
import { BtnEnviar, NavLogin, SmallButton, StyledInput } from '../Login/styles'
import { cores } from '../../styles'
import { Container } from '@mui/material'
import api from '../../Api'

const RecuperarSenha = () => {
  const [email, setEmail] = useState('')
  const [emailEnviado, setEmailEnviado] = useState(false)
  const [erro, setErro] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErro('')

    if (!email) {
      setErro('Informe um e-mail válido')
      return
    }

    try {
      await api.post('/auth/forgot-password', { email })
      setEmailEnviado(true)
    } catch (err) {
      console.error(err)
      setErro('Erro ao enviar o email. Tente novamente.')
    }
  }

  return (
    <Container>
      <NavLogin>
        <SmallButton to="/Sumario" color={cores.laranjaClaro}>
          LIÇÕES
        </SmallButton>
      </NavLogin>

      {emailEnviado ? (
        <p>
          Se este e-mail estiver cadastrado, você receberá uma mensagem com
          instruções para redefinir sua senha.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail:</label>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <BtnEnviar type="submit">Enviar Email de Recuperação</BtnEnviar>
        </form>
      )}
    </Container>
  )
}

export default RecuperarSenha
