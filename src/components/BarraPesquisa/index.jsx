import React, { useState } from 'react'
import { Modal, TextField, IconButton, Button } from '@mui/material'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { TodasMaterias } from '../Propriedades' // Importa os dados de matérias e lições

// Função para remover acentos e normalizar strings
const normalizeString = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase() // Normaliza a string e remove acentos
}

const BarraPesquisa = () => {
  const [isModalOpen, setModalOpen] = useState(false) // Estado para controlar se o modal está aberto ou fechado.
  const [searchInput, setSearchInput] = useState('') // Estado que armazena o texto digitado no campo de busca.
  const [resultados, setResultados] = useState([]) // Estado que armazena os resultados da busca.
  const navigate = useNavigate() // Hook para redirecionamento de páginas no React Router.

  // Função para abrir o modal
  const handleOpenModal = () => {
    setModalOpen(true) // Abre o modal
  }

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalOpen(false) // Fecha o modal
    setSearchInput('') // Limpa o campo de busca ao fechar o modal
    setResultados([]) // Limpa os resultados da busca ao fechar o modal
  }

  // Função para lidar com o input de busca em tempo real
  const handleInputChange = (event) => {
    const busca = normalizeString(event.target.value) // Normaliza a busca para remover acentos e maiúsculas
    setSearchInput(busca) // Atualiza o estado com o valor digitado.

    if (busca) {
      // Se o campo de busca não estiver vazio, faz a filtragem das lições.
      const resultadosBusca = [] // Array para armazenar os resultados da busca.

      // Itera sobre todas as matérias e suas respectivas lições.
      TodasMaterias.forEach((materia) => {
        materia.licoes.forEach((licao) => {
          // Normaliza o nome da lição e verifica se inclui o termo buscado.
          if (normalizeString(licao.nomeLicao).includes(busca)) {
            // Se sim, adiciona a lição aos resultados.
            resultadosBusca.push({
              nomeMateria: materia.nomeMateria, // Adiciona o nome da matéria
              ...licao // Adiciona as propriedades da lição
            })
          }
        })
      })

      // Atualiza os resultados da busca em tempo real
      setResultados(resultadosBusca) // Atualiza o estado com os resultados encontrados.
    } else {
      // Se a busca estiver vazia, limpar os resultados.
      setResultados([]) // Reseta os resultados se o campo de busca estiver vazio.
    }
  }

  return (
    <div>
      {/* Ícone de Pesquisa */}
      <IconButton
        style={{
          backgroundColor: '#d5df19'
        }}
        onClick={handleOpenModal}
      >
        <IoSearch /> {/* Exibe o ícone de pesquisa */}
      </IconButton>

      {/* Modal de Pesquisa */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        {/* O modal será exibido quando isModalOpen for true */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h2>Pesquisar Lição</h2> {/* Título do modal */}
          <TextField
            label="Nome ou Número da Lição"
            variant="outlined"
            fullWidth
            value={searchInput} // O valor do campo de texto está vinculado ao estado searchInput.
            onChange={handleInputChange} // Quando o usuário digita, handleInputChange é chamada para atualizar o estado e buscar em tempo real.
            style={{ marginBottom: '20px' }}
          />
          <div style={{ marginTop: '20px', width: '100%' }}>
            {resultados.length > 0 && (
              <div>
                <h3>Resultados encontrados:</h3>
                <ul>
                  {resultados.map((resultado) => (
                    <li key={resultado.id}>
                      <Button
                        variant="text"
                        onClick={() => {
                          navigate(`/Sumario/${resultado.id}`) // Redireciona para /Sumario/{id} ao clicar na lição
                          setModalOpen(false) // Fecha o modal ao clicar no resultado
                        }}
                      >
                        {resultado.nomeLicao} ({resultado.nomeMateria}){' '}
                        {/* Exibe o nome da lição e da matéria */}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Se não houver resultados, mostrar uma mensagem */}
            {resultados.length === 0 && searchInput && (
              <p>Nenhuma lição encontrada com {searchInput}.</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BarraPesquisa // Exporta o componente BarraPesquisa para ser utilizado em outras partes da aplicação.
