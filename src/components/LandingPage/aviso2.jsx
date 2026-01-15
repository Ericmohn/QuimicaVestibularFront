// src/components/MethodologySection.js
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components' // Importe keyframes para criar a animação

const ContentBox = styled.div`
  display: center;
  /*flex-direction: column;  Coloca o conteúdo em coluna */
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  background-color: rgb(255 241 44 / 64%);
  border-radius: 20px;
  padding: 20px 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Para dar destaque */
  max-width: 600px; /* Limita a largura máxima */
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente o conteúdo */
  margin-bottom: 20px; /* Espaço abaixo do título */
  width: 100%;
  flex-wrap: nowrap; /* Impede que o conteúdo quebre para a próxima linha */
  white-space: nowrap; /* Impede a quebra de linha no texto */
`

const ButtonContainer = styled.div`
  padding-left: 70px;
  display: flex; /* Coloca os botões lado a lado */
  justify-content: space-between; /* Espaço entre os botões */
  align-items: center; /* Centraliza verticalmente os botões */
  width: 80%; /* Faz o contêiner ocupar toda a largura disponível */
  margin-top: 10px;

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none; /* Remove sublinhado dos links */
    display: flex; /*Garante que os botões sejam exibidos como blocos flex */
    align-items: center;
    background-color: #73e794; /* Cor de fundo ao passar o mouse */

    &:hover {
      background-color: #0056b3; /* Cor de fundo ao passar o mouse */
    }
  }

  .btn:first-child {
    margin-right: 10px; /* Adiciona margem à direita do primeiro botão */
  }
`

const SectionWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;
`

const Aviso2 = () => {
  return (
    <section className=" py-4">
      <div className="container text-center">
        <h2>Nosso conteúo oferece: </h2>
        <h5>Quase 200 video aulas</h5>
        <h5>Listas de exercícios com resoluções em video</h5>
        <h5>Tabelas</h5>
        <h5>Calculadora</h5>
        <h5>Revisões de vestibulares</h5>
        <h5>Resoluções atkins.</h5>
        <ButtonContainer>
          <Link to="/sumario" className="btn btn-lg">
            CLIQUE AQUI PARA UMA PREVIEW!
          </Link>
        </ButtonContainer>
      </div>
    </section>
  )
}

export default Aviso2
