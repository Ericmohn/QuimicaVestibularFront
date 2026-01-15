import React from 'react'
import { useParams } from 'react-router-dom'
import { TodasMaterias } from '../Propriedades'

function encontrarApostilaDaLicaoPorID(id: string): string | null {
  for (const materia of TodasMaterias) {
    for (const licao of materia.licoes) {
      if (licao.linkLicao === `./${id}`) {
        return licao.apostila // Retorna a URL da apostila correspondente
      }
    }
  }
  return null
}

const PdfViewer = () => {
  const { id } = useParams()
  const IdProcurado = id || ''
  const apostilaDaLicao = encontrarApostilaDaLicaoPorID(IdProcurado)

  // Retorna um fragmento vazio se não houver apostila disponível
  if (apostilaDaLicao === null) {
    return <></>
  }

  return (
    <div>
      {apostilaDaLicao !== null ? (
        <iframe
          src={apostilaDaLicao}
          width="100%"
          height="480"
          allow="autoplay"
          title="Apostila da Lição"
        ></iframe>
      ) : (
        <p> Apostila não encontrada</p>
      )}
    </div>
  )
}

export default PdfViewer
