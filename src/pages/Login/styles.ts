import styled from 'styled-components'
import { cores } from '../../styles'
import { BotaoClaro } from '../../components/Botao/styles'
import { Link } from 'react-router-dom'

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px auto;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  transition: box-shadow 0.3s ease;
  text-align: center;
  font-size: 16px;
  &:focus {
    outline: none; /* Remove a borda de foco padrão */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5); /* Altera a sombra quando está em foco */
  }
`
export const BtnEnviar = styled.button`
padding: 0.5em;
margin: 10px 0;
width: 100%;
background-color: #20B9E2;
border-radius: 20px;
color: #fff;
font-weight: bold;
font-size: 18px;
}
`
export const FormLogin = styled.form`
  max-width: 70vw;
  width: 100%;
`
export const DivCriarConta = styled.div`
  justify-content: space-around;
  display: flex;
`
export const LinkCriarConta = styled(Link)`
  text-decoration: none;
  color: #20b9e2;
`
export const DivGeralLogin = styled.div`
  display: flex;
  justify-content: center;
`
export const SmallButton = styled(BotaoClaro)`
  font-size: 16px;
  padding: 5px 10px;
  margin: 50px 0px;
  color: #e1915c9c;
  background-color: #bbe7f580;
`
export const NavLogin = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Ccontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const ImagemTutorial = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 30px;
    max-width: 100%;
    justify-content: center;
    height: auto; /* Mantém a proporção */
    object-fit: contain; /* Garante que a imagem não seja distorcida */
  }
`
