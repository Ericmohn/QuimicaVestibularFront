import React from 'react'
import Titulo from '../Titulo'
import { MateriasSumario } from './styles'
import { Link } from 'react-router-dom'

export type Props = {
  nomemateria?: string
  fundo1: string
  fundo2: string
  fontSize?: number
  color?: string
  text?: string
  licoes: Array<{ linkLicao: string; nomeLicao: string }>
  linkLicao?: string
  nomeLicao?: string
  id?: string
}

export const ExibicaoSumario = (props: Props) => {
  const { nomemateria, licoes, id } = props

  // Verificação se nomemateria é "Vestibulares"
  const isVestibulares = nomemateria === 'Vestibulares'

  return (
    <MateriasSumario
      nomemateria={props.nomemateria}
      fundo1={props.fundo1}
      fundo2={props.fundo2}
      linkLicao={props.linkLicao}
      nomeLicao={props.nomeLicao}
      licoes={props.licoes}
      id={props.id}
    >
      <div className="guiaMateria">
        <Titulo fontSize={22} texto={props.nomemateria} id={props.id} />
      </div>

      <div className="ListaMaterias">
        <ul>
          {isVestibulares
            ? // Se for "Vestibulares", renderiza apenas o link direto para Grupo1
              props.licoes.map((licao, index) => (
                <div key={index} className="listaLicoes">
                  <li>
                    <Link to={`/Sumario/${licao.linkLicao}/Grupo1`}>
                      {licao.nomeLicao}
                    </Link>
                  </li>
                </div>
              ))
            : // Caso contrário, renderiza as lições normais
              props.licoes.map((licao, index) => (
                <div key={index} className="listaLicoes">
                  <li>
                    <Link to={licao.linkLicao}>{licao.nomeLicao}</Link>
                  </li>
                </div>
              ))}
        </ul>
      </div>
    </MateriasSumario>
  )
}
