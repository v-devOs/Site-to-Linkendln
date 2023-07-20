

import NextLink from 'next/link'
import { Avatar, Grid, IconButton, Typography, Link } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export const AboutMe = () => {

  return (
    <Grid container sx={{ width: '100%'}}>
      <Grid item spacing={2} width={'50%'}>
        <Grid item>
          <Typography variant='h2' component='h2'>Acerca de mi</Typography>
          <Typography variant='h3' component='h3' mt={5}>Desarollador y diseñador web </Typography>
        </Grid>


          <Grid container display='flex' flexDirection='row'>

            <Grid item mt={3} mr={5} mb={3}>
              <Avatar alt='Uriel Galindo' src='/images/me.jpg' sx={{ width: 130, height: 130}}/>
            </Grid>


            <Grid item display='flex' flexDirection='column' mt={3} >
                <NextLink passHref href='https://instagram.com/uriel_egl?igshid=MzNlNGNkZWQ4Mg=='>
                  <Link component='span'>
                    <InstagramIcon/> Instagram
                  </Link>
                </NextLink>

                <NextLink passHref href='https://wa.me/qr/QCHPQLGFDJH3D1'>
                  <Link component='span'>
                    <WhatsAppIcon/> WhatsApp
                  </Link>
                </NextLink>

                <NextLink passHref href='https://www.linkedin.com/in/uriel-emiliano-galindo-l%C3%B3pez-27437a274'>
                  <Link component='span'>
                    <LinkedInIcon/> LinkedIn
                  </Link>
                </NextLink>
            </Grid>
          </Grid>
       

          <Grid item>
            <Typography variant='body1'>
              Hola!, soy Uriel Emiliano Galindo lópez, un joven programador y desarrolador web apasionado con el desarrollo de apliaciones web 
              personalizables y accesibles a las personas, paginas informativas, apliaciones web e-comerce
            </Typography>
          </Grid>

          <Grid item>
            <NextLink href='/contact-me' passHref>
            <Link component='span'>
              <ArrowOutwardOutlinedIcon/> Contactame
            </Link>
            </NextLink>
          </Grid>
      </Grid>
    </Grid>
  )
}

