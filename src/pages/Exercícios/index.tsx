import { Header } from '../../components/Header'

import { EnunciadosL1Grupo1 } from '../../components/Enunciado/index'
import {
  PaginaExercicios,
  PaginaExercicios2,
  PaginaExercicios3,
  PaginaExercicios4,
  PaginaExercicios5
} from '../../components/Enunciado/styles'
import { EnunciadosL1Grupo2 } from '../../components/Enunciado/index2'
import {
  FundoAmarelo,
  FundoAmarelo2,
  FundoAzul,
  FundoVerde,
  FundoVerde2
} from './styles'
import { EnunciadosL1Grupo4 } from '../../components/Enunciado/index4'
import { EnunciadosL1Grupo3 } from '../../components/Enunciado/index.3'
import { EnunciadosL1Grupo5 } from '../../components/Enunciado/index5'

export const Exercicios = () => {
  return (
    <FundoVerde>
      <PaginaExercicios>
        <EnunciadosL1Grupo1 />
      </PaginaExercicios>
    </FundoVerde>
  )
}

export const Exercicios2 = () => {
  return (
    <FundoAzul>
      <PaginaExercicios2>
        <EnunciadosL1Grupo2 />
      </PaginaExercicios2>
    </FundoAzul>
  )
}

export const Exercicios3 = () => {
  return (
    <FundoAmarelo>
      <PaginaExercicios3>
        <EnunciadosL1Grupo3 />
      </PaginaExercicios3>
    </FundoAmarelo>
  )
}
export const Exercicios4 = () => {
  return (
    <FundoVerde2>
      <PaginaExercicios4>
        <EnunciadosL1Grupo4 />
      </PaginaExercicios4>
    </FundoVerde2>
  )
}

export const Exercicios5 = () => {
  return (
    <FundoAmarelo2>
      <PaginaExercicios5>
        <EnunciadosL1Grupo5 />
      </PaginaExercicios5>
    </FundoAmarelo2>
  )
}
