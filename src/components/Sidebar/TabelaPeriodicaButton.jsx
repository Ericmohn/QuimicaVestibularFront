import React, { useState } from 'react'
import { Modal, Button } from '@mui/material'
import { IconTable } from '../Icones'

function PdfModalButton() {
  const [isPDFVisible, setPDFVisible] = useState(false)
  const [pdfURL, setPDFURL] = useState('')

  // Função para abrir o visualizador de PDF
  const openPDFViewer = (url) => {
    setPDFURL(url)
    setPDFVisible(true)
  }

  // Função para fechar o visualizador de PDF
  const closePDFViewer = () => {
    setPDFVisible(false)
  }

  return (
    <div>
      {/* Botão que abre o PDF no modal */}
      <Button
        variant="contained"
        onClick={() =>
          openPDFViewer(
            'https://drive.google.com/file/d/1B7NLr9Cb7q6EHusLcBReV4Txcx9Fy_JZ/preview'
          )
        }
      >
        Tabela Periódica{' '}
      </Button>

      {/* Modal que exibe o PDF */}
      <Modal open={isPDFVisible} onClose={closePDFViewer}>
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
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

export default PdfModalButton
