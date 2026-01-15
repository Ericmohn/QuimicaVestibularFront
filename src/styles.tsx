import { createGlobalStyle } from 'styled-components'
export const cores = {
  laranja: '#D66C2E',
  laranjaClaro: '#E5D3C7',
  azulFundo: '#EAF5FB',
  azulHeader: '#47BBFA'
}
const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cabin', sans-serif;

      }

      body {

        background-color: ${cores.azulFundo};


      }
        .container {
          max-width: 1024px;
          width: 100%;
          margin: 0 auto;
        }


`
export default EstiloGlobal
