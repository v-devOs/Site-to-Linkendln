import Image from 'next/image'
import { Grid, TextField, Typography } from '@mui/material'

export const ContactMe = () => {
  return (
    <Grid container >
      <Grid item sm={12}>
      </Grid>
      
      <Grid item sm={12} md={7} >
        <Typography variant='h2' component='h2' mt={2} mb={4}>Contactame</Typography>

        <Grid item sx={{ display: {sm: 'block', md: 'flex'}, justifyContent: 'space-between'}} m={0}>
          <TextField fullWidth placeholder='Juan Perez' label='Nombre' className='inputForm'/>
          <TextField fullWidth placeholder='4123465758' label='Tel' className='inputForm'/>
          <TextField fullWidth placeholder='alguien@google.com' label='Email' className='inputForm'/>
        </Grid>
        <TextField 
          multiline 
          rows={5}
          placeholder='Descripcion'
          className='inputForm'
          fullWidth
        />

      </Grid>

      <Grid item sm={12} md={5} mt={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <Image
          src='/images/back2.jpg'
          alt='vector de programacion'
          width={350}
          height={350}
          className='image-contact-me cardApear'
        />
      </Grid>

    </Grid>
  )
}
