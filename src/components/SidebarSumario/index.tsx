import React from 'react'
import Drawer from '@mui/material/Drawer'
import { List, ListItem, ListItemText } from '@mui/material'
import { Materia } from '../../components/Propriedades'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  todasAsMaterias: Materia[]
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  todasAsMaterias
}) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        <h2>Matérias</h2>
        {todasAsMaterias.map((materia, index) => (
          <ListItem button key={index} component="a" href={`#${materia.id}`}>
            <ListItemText primary={materia.nomeMateria} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
