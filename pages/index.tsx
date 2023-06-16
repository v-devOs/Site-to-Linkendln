import Image from 'next/image'

import { Avatar, Grid, IconButton, Typography, Link } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

import { AboutMe } from '@/components/Information'
import { InitialPageLayout } from '@/layouts'

const HomePage = () => {
  return (
    <InitialPageLayout 
      title='Uriel Emiliano Galindo Lopez' 
      description='Sitio web creado para dar a conocer mis habilidades en desarrollo web y proyectos realizados'
    >
      <Grid container spacing={2} sx={{ width: { xs: '100%', md: '85%'}}}>

        <Grid item>
          <Typography variant='h1' component='h1' sx={{ fontFamily: 'serif'}}>Uriel Galindo</Typography>
          <Typography variant='body1' mt={5}>Consequat aliquip labore sint irure voluptate. Nisi culpa Lorem veniam id cillum id aliquip anim dolore proident nisi. Adipisicing excepteur amet eu aliqua adipisicing veniam ea Lorem ullamco officia quis dolore velit reprehenderit. Reprehenderit Lorem excepteur Lorem id veniam labore dolore amet anim.</Typography>
        </Grid>

          <Grid item mt={3} mr={5} mb={3}>
            <Avatar alt='Uriel Galindo' src='/images/me.jpg' sx={{ width: 130, height: 130}}/>
          </Grid>

          <Grid item display='flex' flexDirection='column' mt={3}>
            <IconButton>
              <Link href='' component='span'>
                <InstagramIcon/>
              </Link>
            </IconButton>

            <IconButton>
            <Link href='' component='span'>
                <LinkedInIcon/>
              </Link>
            </IconButton>

            <IconButton>
            <Link href='' component='span'>
                <WhatsAppIcon/>
              </Link>
            </IconButton>
          </Grid>

          <Grid item>
            <Typography variant='body1'>
              Ullamco ut incididunt eu aute non veniam qui reprehenderit esse minim voluptate. Aliqua aute quis eu voluptate ipsum. t do nisi ex do do excepteur cupidatat. Aliquip dolor velit commodo sit qui sunt magna reprehenderit excepteur eiusmod aute. Commodo nulla nisi quis nulla reprehenderit ea duis incididunt deserunt.
            </Typography>
          </Grid>

          <Grid item>
            <Link href='' component='span'>
              <ArrowOutwardOutlinedIcon/> Contactarme
            </Link>
          </Grid>
      </Grid>
    </InitialPageLayout>
  )
}

export default HomePage