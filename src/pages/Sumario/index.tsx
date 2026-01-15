import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ExibicaoSumario } from '../../components/ExibicaoSumario'
import { Button } from '@mui/material'
import Titulo from '../../components/Titulo'
import { TituloSumario } from './styles'
import { TodasMaterias } from '../../components/Propriedades'
import { Header } from '../../components/Header'
import SidebarSumario from '../../components/SidebarSumario'
import { useNavigate } from 'react-router-dom'

const Sumario = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     axios
  //       .get('/Sumario/*', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       })
  //       .then((response) => {
  //         // Atualiza o estado com as informações do usuário
  //         setUsuario(response.data.user)
  //       })
  //       .catch((error) => {
  //         console.error('Erro ao buscar informações do usuário:', error)
  //         navigate('/login') // Redireciona para a página de login em caso de erro
  //       })
  //   } else {
  //     navigate('/login') // Redireciona para a página de login se não houver token
  //   }
  // }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // if (!usuario) {
  //   return <div>Carregando...</div>
  // }

  return (
    <div className="container">
      <Header
        customContent={() => (
          <Button
            onClick={toggleSidebar}
            variant="contained"
            style={{ backgroundColor: '#f1d316', color: 'black' }}
          >
            Matérias
          </Button>
        )}
      />
      <TituloSumario>
        <Titulo texto="Lista de Lições" fontSize={28} />
      </TituloSumario>
      {TodasMaterias.map((materia, index) => (
        <ExibicaoSumario
          key={index}
          nomemateria={materia.nomeMateria}
          fundo1={materia.fundo1}
          fundo2={materia.fundo2}
          id={materia.id}
          licoes={materia.licoes}
          linkLicao={''}
          nomeLicao={''}
        />
      ))}

      <SidebarSumario
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        todasAsMaterias={TodasMaterias}
      />
    </div>
  )
}

export default Sumario
