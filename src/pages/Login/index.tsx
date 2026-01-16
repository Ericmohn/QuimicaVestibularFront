import React, { useState, ChangeEvent, FormEvent } from 'react'
import api from '../../Api'
import { BtnEnviar, DivCriarConta, LinkCriarConta, StyledInput } from './styles'
import { cores } from '../../styles'
import { useNavigate } from 'react-router-dom'

const FormularioLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await api.post('/auth/login', {
        email,
        senha
      })

      localStorage.setItem('token', response.data.token)
      navigate('/user/perfil/assinatura')
    } catch (error: any) {
      if (error.response?.data?.msg) {
        alert(error.response.data.msg)
      } else {
        console.error('Erro ao fazer login:', error)
        alert(
          'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.'
        )
      }
    }

    setEmail('')
    setSenha('')
  }

  return (
    <>
      <h3>
        Caso seja sua primeira vez, crie sua conta clicando em{' '}
        <LinkCriarConta to="/Cadastro">CRIAR CONTA</LinkCriarConta>
      </h3>

      <form onSubmit={handleSubmit}>
        <div>
          <StyledInput
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="E-mail"
          />
        </div>

        <div style={{ position: 'relative' }}>
          <StyledInput
            type={mostrarSenha ? 'text' : 'password'}
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
            placeholder="Senha"
          />

          <button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: cores.laranja,
              fontSize: '18px'
            }}
            aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>

        <BtnEnviar type="submit">ENTRAR</BtnEnviar>
      </form>

      <DivCriarConta>
        <LinkCriarConta to="/RecuperarSenha">RECUPERAR SENHA</LinkCriarConta>
      </DivCriarConta>
    </>
  )
}

export default FormularioLogin
