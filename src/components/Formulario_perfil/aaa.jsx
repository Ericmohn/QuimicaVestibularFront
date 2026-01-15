import React, { useState } from 'react'

function SubscriptionForm() {
  const [formData, setFormData] = useState({
    customer: {
      name: '',
      email: '',
      document: '',
      address: {
        line_1: '',
        line_2: '',
        zip_code: '',
        city: '',
        state: '',
        country: ''
      },
      phones: {
        home_phone: {
          country_code: '',
          area_code: '',
          number: ''
        },
        mobile_phone: {
          country_code: '',
          area_code: '',
          number: ''
        }
      }
    },
    billing_type: 'prepaid',
    interval: 'month',
    minimum_price: 0,
    interval_count: 1,
    items: [],
    discounts: [],
    increments: [],
    payment_method: 'credit_card',
    card_token: '',
    credit_card: {
      installments: 1,
      statement_descriptor: '',
      card: {
        billing_address: {
          line_1: '',
          zip_code: '',
          city: '',
          state: '',
          country: ''
        }
      }
    },
    metadata: {
      id: 'my_subscription_id'
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Aqui você deve implementar a lógica para enviar os dados para a API do Pagarme
    console.log(formData)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="customer-tab"
                  data-toggle="tab"
                  href="#customer"
                  role="tab"
                  aria-controls="customer"
                  aria-selected="true"
                >
                  Dados do Cliente
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="billing-tab"
                  data-toggle="tab"
                  href="#billing"
                  role="tab"
                  aria-controls="billing"
                  aria-selected="false"
                >
                  Dados de Cobrança
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="payment-tab"
                  data-toggle="tab"
                  href="#payment"
                  role="tab"
                  aria-controls="payment"
                  aria-selected="false"
                >
                  Pagamento
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="customer"
                role="tabpanel"
                aria-labelledby="customer-tab"
              >
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Nome"
                  value={formData.customer.name}
                  onChange={handleChange}
                  className="form-control mt-2"
                />
                {/* Adicione os outros campos do cliente aqui */}
              </div>
              <div
                className="tab-pane fade"
                id="billing"
                role="tabpanel"
                aria-labelledby="billing-tab"
              >
                {/* Adicione os campos de cobrança aqui */}
              </div>
              <div
                className="tab-pane fade"
                id="payment"
                role="tabpanel"
                aria-labelledby="payment-tab"
              >
                {/* Adicione os campos de pagamento aqui */}
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Assinar Plano
        </button>
      </form>
    </div>
  )
}

export default SubscriptionForm
