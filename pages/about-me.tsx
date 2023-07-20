import { useWrite } from '@/hooks'
import { Grid, Typography, Button, Link } from '@mui/material'

import { InitialPageLayout } from '@/layouts'
import { LinksSocialMedia } from '@/components/ui'
import { Skills } from '@/components/aboutMe'


const AboutMe = () => {

  const { actualPhrase } = useWrite('Acerca de mi')

  return (
    <InitialPageLayout title={'Acerca de mi'} description={'Mis habilidades y visiones sobre el trabajo'}>
      <Grid container spacing={2} sx={{ width: { xs: '100%', md: '85%'}}}>

      <Grid item>
          <Typography variant='h1' component='h1' sx={{ fontFamily: 'serif'}}>{actualPhrase}</Typography>
          <Typography variant='body1' mt={5}>
            Desarrollador full-stack en proceso ya usando tecnologias como lo son React, NextJs, NodeJs etc. Ademas tambien de virtualizacion mediante docker
          </Typography>
        </Grid>

        <Grid item mt={3} mr={5} mb={3}>
          <Typography variant='body1'>
            Actualmente tambien soy estudiante universitario de la carrera de Ingenieria en Sistemas Computaciones, donde he estado aprediendo sobre
            buenas practicas y plenacion de proyectos a nivel profecional
          </Typography>
        </Grid>

        <hr style={{ width: '95%'}}/>

        <Grid item  m='10px 0'>
          <Typography variant='h2' component='h2'>Herramientas Web</Typography>
          <Skills/>
        </Grid>

        <hr style={{ width: '95%'}}/>


        
        <LinksSocialMedia/>
        
      </Grid>
    </InitialPageLayout>
  )
}

export default AboutMe