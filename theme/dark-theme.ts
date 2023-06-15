import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#252525'
    },

    secondary: {
      main: '#fff'
    },
    
    error: {
      main: red.A400
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#252525'
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
        disableElevation: true,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          padding: '10px',
          // borderRadius: 10,
          border: 'none',
          ":hover": {
            // backgroundColor: 'rgba(0,0,0,0.05)',
            // transition: 'all 0.3s ease-in-out',
          
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
  }
});