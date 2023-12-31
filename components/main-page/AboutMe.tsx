
import Image from 'next/image';

import { Grid, Typography } from '@mui/material'

import { LinksSocialMedia } from '../ui';
import { ButtonsContact } from './ButtonContact';

export const AboutMe = () => {

  return (
    <div id='about-me'>

      <Grid container sx={{ width: '100%'}}>

        <Grid container mt={2} mb={2}>
          
          <Grid item sm={12} md={9}>
            <Typography variant='h2' component='h2'>Acerca de mi</Typography>
            <Typography variant='h3' component='h3' mt={2} mb={2}>Desarollador y diseñador web </Typography>
            <Typography variant='body1' mb={2}>
              Hola!, soy Uriel Emiliano Galindo lópez, un joven programador y desarrolador web apasionado con el desarrollo de apliaciones web 
              personalizables y accesibles a las personas, paginas informativas, apliaciones web e-comerce
            </Typography>
            <Typography variant='body1'>
              Desarrollador full-stack en proceso ya usando tecnologias como lo son React, NextJs, NodeJs etc. 
              Ademas tambien de virtualizacion mediante docker.
              Actualmente tambien soy estudiante universitario de la carrera de Ingenieria en Sistemas Computaciones, donde he estado aprediendo sobre
              buenas practicas y plenacion de proyectos a nivel profecional
            </Typography>
            {/* <ButtonsContact/> */}
            <LinksSocialMedia/>
          </Grid>

          <Grid item sm={12} lg={3} mt={2} sx={{ display: {xs: 'none', lg: 'block'}}}>
            <Image
              src='/images/vector-p-1.jpg'
              width={300}
              height={150}
              alt='Vector de programacion'
              style={{ borderRadius: '10px' }}
              className='vectorImage cardAnimation'
            />
          </Grid>
        </Grid>

        <hr style={{ width: '100%'}}/>
      </Grid>
    </div>
  )
}

