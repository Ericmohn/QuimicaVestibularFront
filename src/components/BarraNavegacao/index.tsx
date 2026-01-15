import React from 'react'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function NavBarUsuario() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/', { replace: true })
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#eaf5fb' }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button variant="outline-danger" onClick={handleLogout}>
            Sair
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarUsuario
