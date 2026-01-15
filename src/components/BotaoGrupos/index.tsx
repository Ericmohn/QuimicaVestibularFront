import React from 'react'
import { useLocation } from 'react-router-dom' // Importe useLocation do React Router
import Titulo from '../Titulo'
import { BtnGrupos, Grupos, SecaoGrupos } from './styled'
import { Questoes } from '../Enunciado/L1' // Importe seus dados de Questoes

const BotaoGrupos = () => {
  const location = useLocation()
  const pathname = location.pathname
  const licao = pathname.substring(pathname.lastIndexOf('/') + 1) // Obtém o nome da lição a partir da URL

  if (Questoes[licao]) {
    const gruposLicao = Object.keys(Questoes[licao])
    return (
      <SecaoGrupos className="sticky-element">
        <Titulo texto={`Exercícios`} fontSize={20}></Titulo>
        <Grupos>
          {gruposLicao.map((grupo) => (
            <BtnGrupos key={grupo} to={`./${grupo}`}>
              {` G${Questoes[licao][grupo].id}`}
            </BtnGrupos>
          ))}
        </Grupos>
      </SecaoGrupos>
    )
  } else {
    return <div>Lição não encontrada</div>
  }
}

export default BotaoGrupos
