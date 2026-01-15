import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BtnCodigoPromocional } from './styles'

const CupomDescontoWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CupomDesconto = ({ userToken }) => {
  const [cupom, setCupom] = useState('PROFESSOR')
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    setCupom(event.target.value.toUpperCase()) // Convertendo para maiúsculas
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        '/user/apply-coupon',
        { cupom },
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      )

      if (response.data.success) {
        setMessage('Cupom aceito! Sua assinatura foi ativada.')
        // Atualizar o campo "assinatura" do usuário para "true"
        window.location.reload() // Recarregar a página para atualizar as informações do usuário
      } else {
        setMessage('Cupom inválido. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao aplicar o cupom:', error)

      setMessage('Cupom inválido')
    }
  }

  return (
    <CupomDescontoWrapper>
      <form onSubmit={handleSubmit}>
        <label>
          Você possui algum código de acesso?
          <input type="text" value={cupom} onChange={handleInputChange} />
        </label>
        <BtnCodigoPromocional type="submit">Verificar</BtnCodigoPromocional>
      </form>
      {message && <p>{message}</p>}
    </CupomDescontoWrapper>
  )
}

export default CupomDesconto
