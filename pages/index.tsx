import { AboutMe } from '@/components/Information'
import { InitialPageLayout } from '@/layouts'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <InitialPageLayout 
      title='Uriel Emiliano Galindo Lopez' 
      description='Sitio web creado para dar a conocer mis habilidades en desarrollo web y proyectos realizados'
    >
      <AboutMe/>

    </InitialPageLayout>
  )
}

export default HomePage