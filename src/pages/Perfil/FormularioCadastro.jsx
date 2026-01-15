import React, { useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { BarraSucesso } from '../Assinatura/styles'
import { EnderecooDiv, InputProfessor, OpcaoUser } from './styles'
import { IMaskInput } from 'react-imask'

const FormularioCadastro = ({ userToken }) => {
  const [formValues, setFormValues] = useState({
    cpf: '',
    telefone: '',
    endereco: '',
    complemento: '0',
    cep: '',
    cidade: '',
    estado: ''
  })

  const [userType, setUserType] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [discountCode, setDiscountCode] = useState('')
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleUserTypeChange = (e) => setUserType(e.target.value)
  const handleDiscountCodeChange = (e) => setDiscountCode(e.target.value)

  const validateDiscountCode = async () => {
    try {
      const response = await axios.post(
        '/user/apply-coupon',
        { cupom: discountCode },
        { headers: { Authorization: `Bearer ${userToken}` } }
      )

      setMessage(
        response.data.success
          ? 'Cupom aceito! Sua assinatura foi ativada.'
          : 'Cupom inválido.'
      )

      if (response.data.success) {
        setTimeout(() => window.location.reload(), 500)
      }
    } catch {
      setMessage('Erro ao validar cupom.')
    }
  }

  const buscarEnderecoPorCEP = async (cep) => {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      if (!res.data.erro) {
        setFormValues({
          ...formValues,
          endereco: res.data.logradouro,
          cidade: res.data.localidade,
          estado: res.data.uf,
          cep: res.data.cep
        })
      }
    } catch {
      alert('Erro ao buscar CEP')
    }
  }

  const salvarInformacoes = async () => {
    await axios.post(
      '/user/perfil/adicionar-informacoes',
      { ...formValues, userType },
      { headers: { Authorization: `Bearer ${userToken}` } }
    )
  }

  // 🔥 NOVA FUNÇÃO – MERCADO PAGO
  const criarAssinaturaMercadoPago = async () => {
    const response = await axios.post(
      '/mercadopago/create-subscription',
      {},
      { headers: { Authorization: `Bearer ${userToken}` } }
    )

    // Redireciona para checkout do Mercado Pago
    window.location.href = response.data.init_point
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await salvarInformacoes()
      await criarAssinaturaMercadoPago()
      setShowSuccessMessage(true)
      setShowForm(false)
    } catch (error) {
      alert('Erro ao iniciar pagamento')
      console.error(error)
    }
  }

  return (
    <Container>
      {showSuccessMessage && (
        <BarraSucesso>Dados salvos com sucesso!</BarraSucesso>
      )}

      {showForm && (
        <EnderecooDiv>
          <h3>Complete seu cadastro</h3>

          <OpcaoUser>
            <label>
              <input
                type="radio"
                value="professor"
                checked={userType === 'professor'}
                onChange={handleUserTypeChange}
              />
              Professor
            </label>

            {userType === 'professor' && (
              <InputProfessor
                value={discountCode}
                onChange={handleDiscountCodeChange}
                onBlur={validateDiscountCode}
              />
            )}

            <label>
              <input
                type="radio"
                value="aluno"
                checked={userType === 'aluno'}
                onChange={handleUserTypeChange}
              />
              Aluno
            </label>
          </OpcaoUser>

          <form onSubmit={handleSubmit}>
            <label>CPF</label>
            <IMaskInput
              mask="000.000.000-00"
              className="form-control"
              name="cpf"
              value={formValues.cpf}
              onChange={handleInputChange}
              required
            />

            <label>CEP</label>
            <IMaskInput
              mask="00 000-000"
              className="form-control"
              name="cep"
              value={formValues.cep}
              onChange={(e) => {
                handleInputChange(e)
                if (e.target.value.replace(/\D/g, '').length === 8) {
                  buscarEnderecoPorCEP(e.target.value.replace(/\D/g, ''))
                }
              }}
              required
            />

            <label>Endereço</label>
            <input
              className="form-control"
              name="endereco"
              value={formValues.endereco}
              onChange={handleInputChange}
              required
            />

            <label>Cidade</label>
            <input
              className="form-control"
              name="cidade"
              value={formValues.cidade}
              onChange={handleInputChange}
              required
            />

            <label>Estado</label>
            <IMaskInput
              mask="aa"
              className="form-control"
              name="estado"
              value={formValues.estado}
              onChange={handleInputChange}
              required
            />

            <label>Telefone</label>
            <IMaskInput
              mask="(00) 0 0000-0000"
              className="form-control"
              name="telefone"
              value={formValues.telefone}
              onChange={handleInputChange}
              required
            />

            <button className="btn btn-success" type="submit">
              Continuar para pagamento
            </button>
          </form>

          {message && <p>{message}</p>}
        </EnderecooDiv>
      )}
    </Container>
  )
}

export default FormularioCadastro
