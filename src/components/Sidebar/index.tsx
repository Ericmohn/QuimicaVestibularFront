import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Button,
  Typography
} from '@mui/material'
import Calculadora from '../Calculadora'
import { useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isCalculatorOpen, setCalculatorOpen] = useState(false)
  const [isPDFVisible, setPDFVisible] = useState(false)
  const [isGlossaryVisible, setGlossaryVisible] = useState(false)
  const [isPeriodicTableVisible, setPeriodicTableVisible] = useState(false)
  const [pdfURL, setPDFURL] = useState('')

  const handleCalculatorClick = () => {
    openPDFViewer('https://www.desmos.com/scientific?lang=pt-BR')
  }

  const navigate = useNavigate()
  const closeCalculator = () => {
    setCalculatorOpen(false)
  }

  const openPDFViewer = (pdfURL: string) => {
    setPDFVisible(true)
    setGlossaryVisible(false)
    setPeriodicTableVisible(false)
    setPDFURL(pdfURL)
  }

  const openGlossaryViewer = () => {
    openPDFViewer(
      'https://drive.google.com/file/d/1PH7QlX7kzQ27UHgpwCMFq3dXTuk648wV/preview'
    )
  }

  const openPeriodicTableViewer = () => {
    openPDFViewer(
      'https://drive.google.com/file/d/1B7NLr9Cb7q6EHusLcBReV4Txcx9Fy_JZ/preview'
    )
  }

  const closePDFViewer = () => {
    setPDFVisible(false)
    setGlossaryVisible(false)
    setPeriodicTableVisible(false)
  }

  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          style={{ margin: '10px' }}
        >
          Fechar
        </Button>
        <List>
          <ListItem button onClick={handleCalculatorClick}>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Calculadora
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1T1tlhl0XBT9yP6DB0CCcyx6pKBy5JRhj/preview'
              )
            }
          >
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Tabelas
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1apqbyJJgc42FMWA6Ty-TfXwwNIlnmQ3U/preview'
              )
            }
          >
            {
              <ul>
                <li>1) Prefixos de múltiplos e submúltiplos da unidade</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>
          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1apqbyJJgc42FMWA6Ty-TfXwwNIlnmQ3U/preview'
              )
            }
          >
            {
              <ul>
                <li>2) Pressão de vapor da água</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/19ks8u6NTGOfEmk2hxEIu7TbmOpraljBt/preview'
              )
            }
          >
            {
              <ul>
                <li>3) Unidades do Sistema Internacional</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1YDIMFKPeG-CFomHWLsqO61HryMx2uPAl/preview'
              )
            }
          >
            {
              <ul>
                <li>4) Constantes</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1YDIMFKPeG-CFomHWLsqO61HryMx2uPAl/preview'
              )
            }
          >
            {
              <ul>
                <li>5) Algumas unidades não-SI geralmente usadas</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1P0eDqSAyiqyQroofxbJQYr6x2kCvqpgH/preview'
              )
            }
          >
            {
              <ul>
                <li>6) Elementos químicos e sua massa atômica</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1Wiq8-wuv6tcFZt9kAcizmgxj1mhtjg37/preview'
              )
            }
          >
            {
              <ul>
                <li>7) Entalpia de formação</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1vyFfGaYoxcaqHif2R1fd2hNS5SopnKRX/preview'
              )
            }
          >
            {
              <ul>
                <li>
                  8) Entalpia de combustão e formação de alguns compostos
                  orgânicos
                </li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1P9ZDe_zWWhVZ8z4ExXCX_5f7Xpd5ypww/preview'
              )
            }
          >
            {
              <ul>
                <li>9) Energia Livre, Capacidade Calorífica, Entropia</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1xNrzCZht9ZESPBm5g4T5s9xiEd5bytlu/preview'
              )
            }
          >
            {
              <ul>
                <li>
                  10) Alguns Compostos Orgânicos: Energia Livre, Capacidade
                  Calorífica molar e Entropia Molar
                </li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/19_Mk1l1-rqPVeWhHgtLChb1vKcoX3gFw/preview'
              )
            }
          >
            {
              <ul>
                <li>11) Potencial Padrão a 25 °C</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1UqpP-_3tBbHgZFftLW7FTR9Y0H8VwGyv/preview'
              )
            }
          >
            {
              <ul>
                <li>12) Configuração Eletrônica do estado fundamental</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1-KKzkql1661yajZ27wOlekRz0JQfGDL6/preview'
              )
            }
          >
            {
              <ul>
                <li>13) Produtos químicos mais comuns</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/12LOkANFMZGf3BaBUhEgBlYOi1OXcCofU/preview'
              )
            }
          >
            {
              <ul>
                <li>14) Constantes do produto de solubilidade a 25°C</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1xZA8HfXMZI4SaVtjivrWkffVrUVLEHRb/preview'
              )
            }
          >
            {
              <ul>
                <li>15) Pressão de vapor da água em várias temperaturas</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1Pdx8lzR37qjMfsYWW6O1enxLzTSGri2N/preview'
              )
            }
          >
            {
              <ul>
                <li>16) Constantes de ionização de ácidos</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/1bG6C3Oo460WYiBQ93-Ft6lbi-kClFl8N/preview'
              )
            }
          >
            {
              <ul>
                <li>17) Constantes de ionização de bases</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem
            button
            onClick={() =>
              openPDFViewer(
                'https://drive.google.com/file/d/17vrvIVAWhQLF_v_sSPOllkbL5EHk6q8e/preview'
              )
            }
          >
            {
              <ul>
                <li>18) Constantes de formação de alguns íons complexos</li>
              </ul>
            }
            <ListItemText primary="" />
          </ListItem>

          <ListItem button onClick={openGlossaryViewer}>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Glossário Atkins
                </Typography>
              }
            />
          </ListItem>
          <ListItem button onClick={openPeriodicTableViewer}>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Tabela Periódica
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary={
                <Nav.Link
                  href="/resolucoes_atkins"
                  style={{ marginTop: '10px' }}
                >
                  RESOLUÇÕES ATKINS (3° edição)
                </Nav.Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Nav.Link href="/user/perfil" style={{ marginTop: '10px' }}>
                  Acessar minhas informações
                </Nav.Link>
              }
            />
          </ListItem>
        </List>
      </Drawer>

      {isCalculatorOpen && <Calculadora onClose={closeCalculator} />}

      <Modal open={isPDFVisible} onClose={closePDFViewer}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <iframe
            src={pdfURL}
            width="100%"
            height="90%"
            frameBorder="0"
            title="PDF Viewer"
          />
          <Button onClick={closePDFViewer} variant="contained" color="primary">
            Fechar
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Sidebar
