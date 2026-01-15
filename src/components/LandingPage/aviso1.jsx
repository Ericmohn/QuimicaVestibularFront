// src/components/MethodologySection.js
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;
`

const Aviso1 = () => {
  return (
    <section className=" py-4">
      <div className="container text-center">
        <h2>Assinaturas Abertas!</h2>
        <h5>Planos de R$40,00 mensais.</h5>
      </div>
    </section>
  )
}

export default Aviso1
