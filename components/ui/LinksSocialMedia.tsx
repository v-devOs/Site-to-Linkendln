import { Button, Grid, Link } from "@mui/material"

import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'


const socialMediaLinks = [
  {
    linkPage: '',
    sectionName: 'Github',
    icon: <GitHubIcon/>
  },
  {
    linkPage: '',
    sectionName: 'LinkedIn',
    icon: <LinkedInIcon/>
  },
  {
    linkPage: '',
    sectionName: 'WhatsApp',
    icon: <WhatsAppIcon/>
  },

]

export const LinksSocialMedia = () => {
  return (
    <Grid item xs={12} mt={4} 
      sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}
    >
      {
        socialMediaLinks.map( ({ sectionName, linkPage, icon})=> (
          <Button key={sectionName} 
            size='large' 
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
