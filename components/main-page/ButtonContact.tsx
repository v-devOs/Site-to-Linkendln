import { Button, Grid, Typography } from '@mui/material';

export const ButtonsContact = () => {
  return (
    <Grid item mt={6} mb={2}>
      <Button
        className="btn-contact-me"
        sx={{ width: { xs: '100%', md: '50%'}}}
        variant='contained'
      >
        <Grid item display='flex' flexDirection='column'>
          <Typography>¿Interesado en una aplicación?</Typography>
          <Typography>Haz click y cuentame sobre tu idea</Typography>
        </Grid>
      </Button>
    </Grid>
  )
}
