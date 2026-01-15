import { Button, List } from '@mui/material'
import { IconeSidebar } from './IconeSidebar'
import { IconVoltar, IconAvancar, IconSidebar } from '../Icones'

export function SidebarButton() {
  return (
    <>
      <Button variant="contained" color="primary">
        <IconSidebar />
        <IconSidebar />
      </Button>
    </>
  )
}
