import { IconStyle, IconesAvancarVoltar, SideBar } from './styles'
import IconAvancarpng from './icone-avancar.png'
import IconVoltarpng from './icone-voltar.png'
import { TbTools } from 'react-icons/tb'
import { BsWindowDock } from 'react-icons/bs'

export const IconBook = () => <TbTools size={24} /> // Renderizando o ícone como um componente React

export const IconSidebar = () => <TbTools size={24} />
export const IconAvancar = () => (
  <IconesAvancarVoltar src={IconAvancarpng} alt="Icone Avançar" />
)
export const IconVoltar = () => (
  <IconesAvancarVoltar src={IconVoltarpng} alt="Icone Voltar" />
)

export const IconTable = () => <BsWindowDock size={24} />
