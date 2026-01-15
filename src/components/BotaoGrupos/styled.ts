import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Grupos = styled.div`
  display: flex;
  justify-content: space-around;
`
export const BtnGrupos = styled(Link)`
  background-color: #7dccf7;
  margin: 8px 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #000;
`
export const SecaoGrupos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #000;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: #addef9;
  position: sticky;
  bottom: 0;
  .sticky-element {
    background-color: #f0f0f0; /* Cor de fundo do elemento sticky no rodapé */
    z-index: 100;
  }

  h5 {
  }
`
