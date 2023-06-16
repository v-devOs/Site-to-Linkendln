import { useWrite } from '@/hooks'
import { Grid, Typography, Button, Link } from '@mui/material'

import { InitialPageLayout } from '@/layouts'
import { LinksSocialMedia } from '@/components/ui'


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

        
        <LinksSocialMedia/>
        
      </Grid>
    </InitialPageLayout>
  )
}

export default AboutMe