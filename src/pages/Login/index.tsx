import React, { useState, ChangeEvent, FormEvent } from 'react'
import api from '../../Api'
import {
  BtnEnviar,
  DivCriarConta,
  DivGeralLogin,
  LinkCriarConta,
  NavLogin,
  SmallButton,
  StyledInput
} from './styles'
import Logotipo from '../../components/Logo'
import { cores } from '../../styles'
import { Container } from '@mui/material' // Importar Container de '@mui/material'
import { useNavigate } from 'react-router-dom' // Importe useNavigate

const FormularioLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const navigate = useNavigate() // Inicialize useNavigate

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
      //redirecionar para /perfil
      navigate('/user/perfil/assinatura')
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.msg) {
        alert(error.response.data.msg)
      } else {
        console.error('Erro ao fazer login:', error)
        alert(
          'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.'
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
        <LinkCriarConta to="/Cadastro"> CRIAR CONTA</LinkCriarConta>
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
        <div>
          <StyledInput
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
            placeholder="Senha"
          />
        </div>

        <BtnEnviar type="submit">ENTRAR</BtnEnviar>
      </form>
      <DivCriarConta>
        <LinkCriarConta to="/RecuperarSenha"> RECUPERAR SENHA</LinkCriarConta>
      </DivCriarConta>
    </>
  )
}

export default FormularioLogin
