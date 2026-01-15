import styled from 'styled-components'
import { Props } from '.'

export const TituloEstilo = styled.h3<Props>`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  line-height: 40px;
`

export const TituloEstilo25 = styled(TituloEstilo)`
  font-size: 30px;
`
