import { useWrite } from '@/hooks'
import { InitialPageLayout } from '@/layouts'
import { Grid, Typography, Avatar } from '@mui/material'

const Projects = () => {

  const { actualPhrase } = useWrite('Proyectos')

  return (
    <InitialPageLayout title={'Proyectos'} description={'Mis habilidades y visiones sobre el trabajo'}>
      <Grid container spacing={2} sx={{ width: { xs: '100%', md: '85%'}}}>

      <Grid item>
        <Typography variant='h1' component='h1' sx={{ fontFamily: 'serif'}}>{actualPhrase}</Typography>
        <Typography variant='body1' mt={5}>Consequat aliquip labore sint irure voluptate. Nisi culpa Lorem veniam id cillum id aliquip anim dolore proident nisi. Adipisicing excepteur amet eu aliqua adipisicing veniam ea Lorem ullamco officia quis dolore velit reprehenderit. Reprehenderit Lorem excepteur Lorem id veniam labore dolore amet anim.</Typography>
        </Grid>

        <Grid item mt={3} mr={5} mb={3}>
          <Avatar alt='Uriel Galindo' src='/images/me.jpg' sx={{ width: 130, height: 130}}/>
        </Grid>

        
      </Grid>
    </InitialPageLayout>
  )
}

export default Projects