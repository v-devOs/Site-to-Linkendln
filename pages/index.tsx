import NextLink from 'next/link'
import Image from 'next/image'
import { Avatar, Grid, IconButton, Typography, Link } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

import { InitialPageLayout } from '@/layouts'
import { useWrite } from '@/hooks'


const HomePage = () => {

  const { actualPhrase } = useWrite('Uriel Galindo')
  
  return (
    <InitialPageLayout 
      title='Uriel Emiliano Galindo Lopez' 
      description='Sitio web creado para dar a conocer mis habilidades en desarrollo web y proyectos realizados'
    >
      <Grid container spacing={2} sx={{ width: { xs: '100%', md: '85%'}}}>

        <Grid item>
          <Typography variant='h1' component='h1' sx={{ fontFamily: 'serif'}}>{actualPhrase}</Typography>
          <Typography variant='h2' mt={5}>Desarollador y diseñador web </Typography>
        </Grid>

          <Grid item mt={3} mr={5} mb={3}>
            <Avatar alt='Uriel Galindo' src='/images/me.jpg' sx={{ width: 130, height: 130}}/>
          </Grid>

          <Grid item display='flex' flexDirection='column' mt={3}>
            <IconButton>
              <NextLink passHref href='https://instagram.com/uriel_egl?igshid=MzNlNGNkZWQ4Mg=='>
                <Link component='span'>
                  <InstagramIcon/>
                </Link>
              </NextLink>
            </IconButton>

            <IconButton>
              <NextLink passHref href='https://wa.me/qr/QCHPQLGFDJH3D1'>
                <Link component='span'>
                  <WhatsAppIcon/>
                </Link>
              </NextLink>
            </IconButton>

            <IconButton>
              <NextLink passHref href='https://www.linkedin.com/in/uriel-emiliano-galindo-l%C3%B3pez-27437a274'>
                <Link component='span'>
                  <LinkedInIcon/>
                </Link>
              </NextLink>
            </IconButton>
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
    </InitialPageLayout>
  )
}

export default HomePage