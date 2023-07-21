import { useContext } from 'react';

import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import ModalMui from '@mui/material/Modal';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { UIContext } from '@/context/ui';


const style = {

  position: 'relative' as 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export const Modal = () => {
  
  const { isActiveModal, toggleSideMenuOrModal } = useContext(UIContext)

  return (
      <ModalMui
        open={isActiveModal}
        onClose={() => toggleSideMenuOrModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, borderRadius: '20px'}}>
          <Grid container >
            <Typography variant='h2' component='h2' mb={3}>Contactame</Typography>
            <TextField
              fullWidth
              placeholder='Uriel Emiliano Galindo Lopez'
              label='Nombre'
              sx={{ mb: 3 }}
              autoFocus
            />
            <TextField
              fullWidth
              placeholder='alguien@gmail.com'
              label='Correo'
              sx={{ mb: 3}}
            />
            <TextField
              fullWidth
              placeholder='4121204726'
              label='Tel'
              sx={{ mb: 3}}
            />
            <TextField
              fullWidth
              placeholder='4121204726'
              label='Cuentame sobre tu idea'
              multiline
              rows={5}
              sx={{ mb: 3}}
            />

              <Button
                onClick={ () => toggleSideMenuOrModal(false)}
                startIcon={<SendOutlinedIcon/>}
                color='success'
                variant='contained'
                fullWidth
                sx={{ mb: 2}}
              >
                Enviar
              </Button>

              <Button
                onClick={ () => toggleSideMenuOrModal(false)}
                startIcon={<DeleteOutlineOutlinedIcon/>}
                color='error'
                variant='contained'
                fullWidth
              >
                Cerrar
              </Button>

              <Box sx={{ flex: 1}}></Box>

          </Grid>
        </Box>
      </ModalMui>
  );
}