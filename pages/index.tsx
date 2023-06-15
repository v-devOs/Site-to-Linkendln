import { InitialPageLayout } from '@/layouts'
import { Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <InitialPageLayout 
      title='Uriel Emiliano Galindo Lopez' 
      description='Sitio web creado para dar a conocer mis habilidades en desarrollo web y proyectos realizados'
    >
      <Typography>Uriel Emiliano Galindo Lopez</Typography>
    </InitialPageLayout>
  )
}

export default HomePage