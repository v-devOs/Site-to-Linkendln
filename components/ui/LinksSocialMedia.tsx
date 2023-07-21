import { Button, Grid, Link } from "@mui/material"

import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'


const socialMediaLinks = [
  {
    linkPage: 'https://github.com/v-deVos',
    sectionName: 'Github',
    icon: <GitHubIcon/>
  },
  {
    linkPage: 'https://www.linkedin.com/in/uriel-emiliano-galindo-l%C3%B3pez-27437a274',
    sectionName: 'LinkedIn',
    icon: <LinkedInIcon/>
  },
  {
    linkPage: 'https://wa.me/qr/QCHPQLGFDJH3D1 ',
    sectionName: 'WhatsApp',
    icon: <WhatsAppIcon/>
  },

]

export const LinksSocialMedia = () => {
  return (
    <Grid item mt={4}
      sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 1, md: 5}, flexWrap: 'wrap', width:{ xs: '100%', md: '50%'}}}
    >
      {
        socialMediaLinks.map( ({ sectionName, linkPage, icon})=> (
          <Button key={sectionName} 
            className='circular-btn'
            color='secondary' 
            startIcon={icon}
            endIcon={<ArrowOutwardOutlinedIcon/>}
          >
            <Link href={linkPage}>
              {sectionName}
            </Link>
          </Button>
        ))
      }
    </Grid>
  )
}
