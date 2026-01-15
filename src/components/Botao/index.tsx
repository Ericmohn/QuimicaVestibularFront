import { Botao as BotaoBtn } from './styles'
import { cores } from '../../styles'

export type Props = {
  children: string
  tipo?: string | 'principal'
  color: string
  to: string
}

const Botao = (props: Props) => {
  return (
    <BotaoBtn to={props.to} color={cores.laranja}>
      {props.children}
    </BotaoBtn>
  )
}

export default Botao
