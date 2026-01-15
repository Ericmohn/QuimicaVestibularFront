import styled from 'styled-components'
import { Props } from '.'

export const MateriasSumario = styled.nav<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: 10px 10px;

  .guiaMateria {
    margin-bottom: -20px;
    background-color: ${(props) => props.fundo1};
    border-radius: 10px;
    width: 70vw;
    text-align: center;
    position: relative;
    z-index: 1;

    @media (min-width: 1024px) {
      width: 30vw;
    }
  }

  .ListaMaterias {
    background-color: ${(props) => props.fundo2};
    margin-left: 10px;
    padding-top: 25px;
    padding-bottom: 3px;
    position: relative;
    z-index: 0;
    border-radius: 20px;

    @media (min-width: 500px) {
      margin-left: 20px;
      margin-right: 50px;
    }
  }
  ul {
    overflow-wrap: break-word;
  }

  li::marker {
    color: ${(props) => props.fundo1};
    font-size: 25px;
  }
  li {
    text-decoration: none;
    padding-left: 20px;
    text-indent: -60px;
    padding-left: 55px;
    margin-left: 10px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }
  .listaLicoes {
    line-height: 3vh;
    margin-bottom: 2vh;
  }
`
export const BtnLicao = styled.button``
