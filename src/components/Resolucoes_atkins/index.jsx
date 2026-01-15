import React, { useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PdfButton = ({ chapterNumber, onClick, label }) => (
  <Button
    variant="primary"
    onClick={onClick}
    style={{ margin: '2px' }} // Estilização inline para margem de 2px
  >
    {label ? label : `Capítulo ${chapterNumber}`}
  </Button>
)

const ChapterButtons = () => {
  // Substitua os links dos PDFs abaixo pelos links reais de cada capítulo
  const oddPdfLinks = [
    'https://drive.google.com/file/d/15bCbaD86pVqcCwQoFPdZ2-MqyG3JjDrs/preview',
    'https://drive.google.com/file/d/1crcNCY8WX2higo0lSGjjOmw8yPYy3Y0b/preview',
    'https://drive.google.com/file/d/1S5HWfh9JuS9Z6oNjkveJ-EmdAPUOc7ZK/preview',
    'https://drive.google.com/file/d/14kIKYKvW4ck8i9p7OUPGus8DkL3w3iF1/preview',
    'https://drive.google.com/file/d/1L6g1awlFwGaHPRXQbb6iizVWnylswKLe/preview',
    'https://drive.google.com/file/d/1hiHXb9yYEpuAimRMhkD0QYk-CLbpjDoD/preview',
    'https://drive.google.com/file/d/1FaDIzJiZhSX40b7u76WNfAAX3UdpAGJd/preview',
    'https://drive.google.com/file/d/1zquW9kndGOzRdzrTQkU7pLVNYZiaY8w8/preview',
    'https://drive.google.com/file/d/1r1-cr4eumS639VE_4tGMgP5wrXSZrnK5/preview',
    'https://drive.google.com/file/d/1v5viAVCyDY4YAEa5TmvtpE1U-uB_oTYA/preview',
    'https://drive.google.com/file/d/1whPqcKK9q_3lphcfP66tAzZUmaHfXYpc/preview',
    'https://drive.google.com/file/d/1Y1fKj2FfUrJT-52rOhH6o9sonkDQXqNl/preview',
    'https://drive.google.com/file/d/1HE1Aay_WWXQ0GwQxQEbyPP_PIlg9TFw6/preview',
    'https://drive.google.com/file/d/1WCoR5b-2KG9TMABNNabtP33RU7pMp2bp/preview',
    'https://drive.google.com/file/d/1bhzrQA6JQ0q-CVC-r7ufFgSzEjptw-fr/preview',
    'https://drive.google.com/file/d/1-U8YbR6OPMIwXxqrwljxRtszBJN91DTC/preview',
    'https://drive.google.com/file/d/1-INz9BQkwHx0hp04G1AwAK6yHvI6CL3u/preview',
    'https://drive.google.com/file/d/1XxuRrOLF4rWZdprsuQtZIMSJ9yo3N37R/preview',
    'https://drive.google.com/file/d/1dq6NHq1q0OaPTX6xiitXJQGik-vmxRMD/preview'
    // outros links...
  ]

  const evenPdfLinks = [
    'https://drive.google.com/file/d/1Hf6Hh5eiivc23i46oLU6TYaaXxnWLmlZ/preview',
    'https://drive.google.com/file/d/15S6ic3GXi3H4QTOvLIApVFFhl2Z5xaQ-/preview',
    'https://drive.google.com/file/d/1Irl9PkgITOK-vxt1cr2eNLeGP1L7joS5/preview',
    'https://drive.google.com/file/d/1Nusl8vLbBUaSwLC_f7KuczR7Bi1Kiby0/preview',
    'https://drive.google.com/file/d/1vmTcPeHI7LS1oiEx7bj4orezirjG83-k/preview',
    'https://drive.google.com/file/d/1hkGJB18KgDxaHUHRAdkgzes170yv7pVd/preview',
    'https://drive.google.com/file/d/1BxBH5rYLRIliBj_9-2JQ7-a5sr0tDx2O/preview',
    'https://drive.google.com/file/d/1yjeimphmlmI3zxMQ07md61doBaCLgXY_/preview',
    'https://drive.google.com/file/d/1k_udsuFcwCmS4kt8m2pItjwXqa-OQcbX/preview',
    'https://drive.google.com/file/d/1NhWDeXVAi3oipnAMRxuKjc58Aq74MUPu/preview',
    'https://drive.google.com/file/d/1OPiAApvlj1GIyUuiwJ8rQYKfmTpELt4s/preview',
    'https://drive.google.com/file/d/1JiG6HSNtqxVZGniE5ZJxdcWbj92uhOJk/preview',
    'https://drive.google.com/file/d/1XR_3ZKdcWVY6shV3ur5HDAD-K5QjLr-K/preview',
    'https://drive.google.com/file/d/1YnOA8WepIKVrkeMWy3Z2oTHmv4GyVBpD/preview',
    'https://drive.google.com/file/d/1TXBHbPAD2Pzn7I9wzczHPknb-kA9XvDS/preview',
    'https://drive.google.com/file/d/1d6jQ5c64k3Ffg9ZE3z_P3kLVzXJl1u8D/preview',
    'https://drive.google.com/file/d/13cuHyl9eoi6s4-Z75NtiY8abXXjUy72D/preview',
    'https://drive.google.com/file/d/1RH7Tu1Q-jaj16ris20K5U1dbUMZcstjd/preview',
    'https://drive.google.com/file/d/1_5WwpQZvBcSzXTxLgpFEw3-DRuy23rRd/preview'
    // outros links...
  ]

  // Links de PDF para a seção Fundamentals
  const fundamentalsOddLink =
    'https://drive.google.com/file/d/1HFV_gqInFm4X2jyh7j_JtI5G1RLKbOOH/preview' // Substitua pelo link real do PDF "Fundamentals Ímpar"
  const fundamentalsEvenLink =
    'https://drive.google.com/file/d/18_sAiN0pMIGvOj9a3AqI2ZIjCwXTAS5G/preview' // Substitua pelo link real do PDF "Fundamentals Par"

  const [showModal, setShowModal] = useState(false)
  const [pdfUrl, setPdfUrl] = useState('')

  const handleShowModal = (url) => {
    setPdfUrl(url)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setPdfUrl('')
  }

  return (
    <Container>
      <div>
        <Link to="/sumario" className="btn btn-lg btn-primary mb-3">
          VOLTAR PARA LIÇÕES
        </Link>
      </div>

      {/* Seção para Capítulos Ímpares */}
      <h3>Capítulos Pares</h3>
      <div>
        {oddPdfLinks.map((url, index) => (
          <PdfButton
            key={`odd-${index + 1}`}
            chapterNumber={index + 1}
            onClick={() => handleShowModal(url)}
          />
        ))}
      </div>

      {/* Seção para Capítulos Pares */}
      <h3>Capítulos Ímpares</h3>
      <div>
        {evenPdfLinks.map((url, index) => (
          <PdfButton
            key={`even-${index + 1}`}
            chapterNumber={index + 1}
            onClick={() => handleShowModal(url)}
          />
        ))}
      </div>

      {/* Seção para Fundamentals Ímpar */}
      <h3>Fundamentals Ímpar</h3>
      <div>
        <PdfButton
          label="Abrir Fundamentals Ímpar"
          onClick={() => handleShowModal(fundamentalsOddLink)}
        />
      </div>

      {/* Seção para Fundamentals Par */}
      <h3>Fundamentals Par</h3>
      <div>
        <PdfButton
          label="Abrir Fundamentals Par"
          onClick={() => handleShowModal(fundamentalsEvenLink)}
        />
      </div>

      {/* Modal para exibir o PDF */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Visualizar PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={pdfUrl}
            style={{ width: '100%', height: '500px' }}
            frameBorder="0"
            title="PDF Viewer"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ChapterButtons
