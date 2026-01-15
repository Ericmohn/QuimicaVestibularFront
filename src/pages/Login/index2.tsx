import React from 'react'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BotaoClaro } from '../../components/Botao/styles'
import { cores } from '../../styles'
import NavBarUsuario from '../../components/BarraNavegacao'
import Logotipo from '../../components/Logo'
import imagemTutorial from '../Perfil/Formularios/Ativo 1.jpg'
import { Ccontainer, ImagemTutorial } from './styles'

function BasicExample() {
  return (
    <Ccontainer>
      <BotaoClaro to="/Sumario" color={cores.laranja}>
        VER LISTA DE LIÇÕES
      </BotaoClaro>
      <ImagemTutorial src={imagemTutorial} />
    </Ccontainer>
  )
}

export default BasicExample
