import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { PagamentoDiv } from './styles'

const Cupom6meses = ({ userToken }) => {
  const [coupon, setCoupon] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://localhost:5002/user/perfil', {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        })
        setUserData(response.data)
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error)
      }
    }
    fetchUserData()
  }, [userToken])

  const handleApplyCoupon = async () => {
    try {
      const response = await axios.post(
        // 'https://localhost:5002/apply-coupon',
        { coupon },
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      )

      if (response.data.valid) {
        setUserData((prevData) => ({
          ...prevData,
          subscription: true
        }))
        setSuccess('Cupom aplicado com sucesso!')
        setError('')
      } else {
        setError('Cupom inválido.')
        setSuccess('')
      }
    } catch (error) {
      console.error('Erro ao aplicar o cupom:', error)
      setError('Erro ao aplicar o cupom.')
      setSuccess('')
    }
  }

  return (
    <PagamentoDiv>
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Cupom de desconto"
      />
      <button onClick={handleApplyCoupon}>Aplicar Cupom</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </PagamentoDiv>
  )
}

export default Cupom6meses
