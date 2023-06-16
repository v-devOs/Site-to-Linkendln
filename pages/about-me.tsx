import { useWrite } from '@/hooks'
import { Grid, Typography, Button, Link } from '@mui/material'

import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { InitialPageLayout } from '@/layouts'

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
const AboutMe = () => {

  const { actualPhrase } = useWrite('Acerca de mi')

  return (
    <InitialPageLayout title={'Acerca de mi'} description={'Mis habilidades y visiones sobre el trabajo'}>
      <Grid container spacing={2} sx={{ width: { xs: '100%', md: '85%'}}}>

      <Grid item>
          <Typography variant='h1' component='h1' sx={{ fontFamily: 'serif'}}>{actualPhrase}</Typography>
          <Typography variant='body1' mt={5}>Consequat  proident nisi. Adipisicing excepteur amet eu aliqua adipisicing veniam ea Lorem ullamco officia quis dolore velit reprehenderit. Reprehenderit Lorem excepteur Lorem id veniam labore dolore amet anim.</Typography>
        </Grid>

        <Grid item mt={3} mr={5} mb={3}>
          <Typography variant='body1'>Officia voluptate duis sunt consequat tempor Lorem consectetur mollit mollit Lorem nostrud veniam. Eiusmod exercitation labore ex aliqua do. Ut do fugiat Lorem pariatur anim do nisi pariatur irure cillum. Exercitation incididunt culpa anim qui eu cupidatat ullamco duis. Labore dolor sint est exercitation Lorem cupidatat nostrud deserunt esse nisi minim cupidatat. Tempor dolor consectetur tempor adipisicing velit anim labore.</Typography>
        </Grid>

        <hr style={{ width: '95%'}}/>

        <Grid item >
          <Typography variant='body1' mt={2}>Officia dolor culpa enim dolore sint dolor occaecat. Ipsum sit laborum anim esse consequat. Non et nulla reprehenderit veniam sunt deserunt reprehenderit.</Typography>
          <Typography variant='body1' mt={2}>Officia dolor culpa enim dolore sint dolor occaecat. Ipsum sit laborum anim esse consequat. Non et nulla reprehenderit veniam sunt deserunt reprehenderit.</Typography>
          <Typography variant='body1' mt={2}>Officia dolor culpa enim dolore sint dolor occaecat. Ipsum sit laborum anim esse consequat. Non et nulla reprehenderit veniam sunt deserunt reprehenderit.</Typography>
        </Grid>

        <Grid item mt={4} xs={12} display='flex' justifyContent='space-between'>
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
        
      </Grid>
    </InitialPageLayout>
  )
}

export default AboutMe