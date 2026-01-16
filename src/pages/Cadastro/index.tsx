import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { BtnEnviar, NavLogin, SmallButton, StyledInput } from '../Login/styles'
import { cores } from '../../styles'
import { Container } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import api from '../../Api'

const CadastroForm = () => {
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      telefone: ''
    },

    validationSchema: Yup.object({
      nome: Yup.string()
        .required('Campo obrigatório')
        .matches(
          /^[a-zA-ZÀ-ÿ]+(?:\s+[a-zA-ZÀ-ÿ]+)+$/,
          'Informe o nome completo'
        ),

      email: Yup.string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),

      senha: Yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Campo obrigatório'),

      telefone: Yup.string()
        .required('Campo obrigatório')
        .matches(
          /^\(\d{2}\) \d \d{4}-\d{4}$/,
          'Formato inválido. Ex: (99) 9 9999-9999'
        )
    }),

    onSubmit: async (values) => {
      try {
        setLoadingPayment(true)

        // 1️⃣ Cadastro
        console.log('API baseURL:', api.defaults.baseURL)
        const registerResponse = await api.post('/auth/register', values)
        const { token } = registerResponse.data

        localStorage.setItem('token', token)

        // 2️⃣ Criar assinatura
        const paymentResponse = await api.post(
          '/assinatura',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        // 3️⃣ Redireciona
        if (!paymentResponse.data?.init_point) {
          throw new Error('Init point não retornado')
        }

        window.location.href = paymentResponse.data.init_point
      } catch (err: unknown) {
        console.error(err)

        let msg = 'Erro inesperado no servidor'

        if (axios.isAxiosError(err)) {
          msg = err.response?.data?.msg || err.response?.data?.error || msg
        }

        alert(msg)
      } finally {
        setLoadingPayment(false)
      }
    }
  })

  return (
    <Container>
      <NavLogin>
        <SmallButton to="/Sumario" color={cores.laranjaClaro}>
          LIÇÕES
        </SmallButton>
      </NavLogin>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nome Completo</label>
          <StyledInput
            name="nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
          />
          {formik.errors.nome && <p>{formik.errors.nome}</p>}
        </div>

        <div>
          <label>E-mail</label>
          <StyledInput
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>

        <div style={{ position: 'relative' }}>
          <label>Senha</label>

          <StyledInput
            name="senha"
            type={mostrarSenha ? 'text' : 'password'}
            value={formik.values.senha}
            onChange={formik.handleChange}
            autoComplete="new-password"
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

          {formik.errors.senha && <p>{formik.errors.senha}</p>}
        </div>

        <div>
          <IMaskInput
            mask="(00) 0 0000-0000"
            name="telefone"
            value={formik.values.telefone}
            onAccept={(value) => formik.setFieldValue('telefone', value)}
            placeholder="(__) _ ____-____"
          />
          {formik.errors.telefone && <p>{formik.errors.telefone}</p>}
        </div>

        <BtnEnviar
          type="submit"
          disabled={formik.isSubmitting || loadingPayment}
        >
          {loadingPayment ? 'Redirecionando para pagamento...' : 'Cadastrar'}
        </BtnEnviar>
      </form>
    </Container>
  )
}

export default CadastroForm
