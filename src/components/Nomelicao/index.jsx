// LicaoDetalhes.jsx
import React from 'react'
import { TodasMaterias } from '../Propriedades'

const LicaoDetalhes = ({ idLicao }) => {
  const encontrarLicao = (id) => {
    for (const materia of TodasMaterias) {
      const licao = materia.licoes.find((licao) => licao.id === id)
      if (licao) {
        return licao
      }
    }
    return undefined
  }

  const licao = encontrarLicao(idLicao)

  if (!licao) {
    return <div>Lição não encontrada</div>
  }

  return (
    <div>
      <p
        style={{
          color: '#fff',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: '#76234f'
        }}
      >
        {licao.nomeLicao}
      </p>
    </div>
  )
}

export default LicaoDetalhes
