import React from 'react'
import { Container } from '@mui/material'
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react'
import axios from 'axios'

initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY)

const CardForm = ({ userToken }) => {
  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(
        '/assinatura',
        {
          cardToken: formData.token,
          email: formData.payer.email
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.data.success) {
        alert('Assinatura criada com sucesso!')
        window.location.reload()
      } else {
        alert('Erro ao criar assinatura')
      }
    } catch (error) {
      console.error(error)
      alert('Erro no pagamento')
    }
  }

  return (
    <Container maxWidth="sm">
      <h3>Assinatura mensal</h3>
      <p>
        Valor: <b>R$ 20,00</b>
      </p>

      <CardPayment
        initialization={{
          amount: 20
        }}
        onSubmit={handleSubmit}
        locale="pt-BR"
      />
    </Container>
  )
}

export default CardForm
