import styled from 'styled-components'

export const Container = styled.div`
  max-height: 100vh;
`
export const FundoAzul = styled.div`
  background-color: #8e9bcd;
  height: 100vh;
`
export const FundoVerde = styled.div`
  background-color: #255a50;
  height: 100vh;
`
export const FundoAmarelo = styled.div`
  background-color: #d66c2e;
  height: 100vh;
`
export const FundoVerde2 = styled.div`
  background-color: #04a99c;
  height: 100vh;
`
export const FundoAmarelo2 = styled.div`
  background-color: #faff99;
  height: 100vh;
`
export const BarraNavegacao = styled.div`
  display: flex;
  margin: 10px 10px;
  border-radius: 30px;
  align-items: center;

  .icone {
  }

  .navExercicios {
    display: flex;
    background-color: #85ff85;
    max-width: 100%;
    width: 100%;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 10px;
    flex-wrap: wrap;

    & button {
      max-width: 30px;
      width: 100%;
      margin: 5px 5px;
      padding: 5px 5px;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      border-radius: 10px;
      border: 1px solid #052505;
    }
  }
`

export const NavBotoes = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: space-around;
`

export const BtnResolucao = styled.button`
  background-color: #ff99c1;
  padding: 0 30px;
  border-radius: 10px;
  font-size: 15px;
`
export const BotoesControles = styled.button`
  background-color: #05b805;
  padding: 10px 20px;
  border-radius: 15px;
  border: 1px solid #000;
`
export const ButtonSideBar = styled.button`
  background-color: #eee;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: #39c3bb;
  margin-right: 10px;
`
