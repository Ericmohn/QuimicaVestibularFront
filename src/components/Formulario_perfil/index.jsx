import React, { useEffect } from 'react'
import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react'

initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY)

function Formulario_Perfil() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('/assinatura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          cardToken: formData.token,
          email: formData.payer.email
        })
      })

      const data = await response.json()

      if (data.success) {
        alert('Assinatura criada com sucesso!')
        window.location.reload()
      } else {
        alert('Erro ao criar assinatura')
      }
    } catch (err) {
      console.error(err)
      alert('Erro no pagamento')
    }
  }

  return (
    <div className="container mt-4">
      <h3>Pagamento</h3>

      <CardPayment
        initialization={{
          amount: 49.9
        }}
        onSubmit={handleSubmit}
        locale="pt-BR"
      />
    </div>
  )
}

export default Formulario_Perfil
