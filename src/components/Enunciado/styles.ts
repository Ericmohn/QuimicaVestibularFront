import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50vh); /* Move para baixo 50% da altura da viewport */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const BtnResolucao = styled.button`
  background-color: #ff99c1;
  padding: 0 30px;
  border-radius: 10px;
  font-size: 15px;
  border: 1px solid #000;
  font-weight: bold;
  color: #000;
`
export const EnunciadoImg = styled.div`
  background-color: #d1ffd1;
  border-radius: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;

  img {
    max-width: 600px;
    width: 100%;
    margin: 10px 5px;
  }
`
export const ResolucaoImg = styled.div`
  display: flex;
  background-color: #ffe7e7;
  border-radius: 10px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 600px;
    width: 100%;
    margin: 10px 10px;
    scroll-behavior: smooth;
  }
`
export const PaginaExercicios = styled.div`
  background-color: #255a50;

  padding-bottom: 2px 0px;
`
export const PaginaExercicios2 = styled.div`
  background-color: #8e9bcd;
  padding-bottom: 2px 0px;
`

export const PaginaExercicios3 = styled.div`
  background-color: #d66c2e;
  padding-bottom: 2px 0px;
`

export const PaginaExercicios4 = styled.div`
  background-color: #04a99c;
  padding-bottom: 2px 0px;
`
export const PaginaExercicios5 = styled.div`
  background-color: #faff99;
  padding-bottom: 2px 0px;
`
export const TopoPagina = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid #000;

  h3 {
    background-color: #fff;
    padding: 5px;
    color: #000;
    border-radius: 10px;
    margin-top: 0;
  }
`

export const Sidebar = styled.div`
  width: 0;
  position: fixed;
  top: 0;
  right: -250px;
  background-color: #333;
  height: 100%;
  transition: 0.5s;
  z-index: 1;
  overflow-y: auto;
  padding-top: 60px;
`

export const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const SidebarItem = styled.li`
  padding: 15px;
`

export const SidebarLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
`

export const HiddenSidebar = styled(Sidebar)`
  display: none;
`

export const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
`
