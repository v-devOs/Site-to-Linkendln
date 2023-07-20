import { Avatar, Grid, Typography } from '@mui/material'
import { LinksSocialMedia } from './LinksSocialMedia'

export const Footer = () => {
  return (
    <Grid container mt={5} display='flex' justifyContent='center'>
     
      <Grid item>
        <Avatar
          src='/images/me.jpg'
          sx={{ width: 200, height: 200}}
        />
        <Typography variant='body2' mt={4}>Todos los derechos reservados 2023</Typography>
        <Typography variant='body2'>Uriel Emiliano Galindo Lopez</Typography>
        <Typography variant='body2'>Desarrollador web</Typography>

      </Grid>
    </Grid>
  )
}
