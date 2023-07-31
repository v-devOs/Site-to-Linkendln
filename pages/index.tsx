import Image from 'next/image';

import { Grid, Typography } from "@mui/material"

import { AboutMe, Projects, Skills } from "@/components/main-page"
import { SideMenu } from "@/components/ui";

import { InitialPageLayout } from "@/layouts"

import { descBackEnd, descFrontEnd, skillsBackEnd, skillsFrontEnd } from "@/data"
import { useWrite } from '../hooks/useWrite';
import { Modal } from '../components/ui/';


const HomePage = () => {

  const { actualPhrase } = useWrite('Hola!, Soy Uriel Galindo')

  return (
    <InitialPageLayout title="Uriel Galindo" description="Mi sitio web creado para divulgar un poco de mis habilidades y proyectos realizados">
      <SideMenu/>
      {/* <Modal/> */}
      <Grid 
        container 
        className="container-header"
      >
        <header>
          <Typography variant="h1" component='h1'>{actualPhrase}</Typography>
          <Typography variant="body1">Si puedes imaginarlo puedes programarlo - Alejandro Taboada</Typography>
        </header>
      </Grid>

      <Grid
        container
        sx={{ m: { xs: '50vh 10px 20px', md: '55vh 30px 20px'}, background: '#101010', width: '100%', borderRadius: '20px', p: '20px'}}
      >

        <AboutMe/>

        <div id='tools'>
          <Typography variant="h2" component='h2' mt={2}>Tecnologias para desarrollo</Typography>
        </div>
        <Skills skills={skillsFrontEnd} title="Front-End" description={descFrontEnd}/>
        
        <Skills skills={skillsBackEnd} title="Back-End" useInSideLef={true} description={descBackEnd}/>

        <hr style={{ width: '100%'}}/>

        <Projects/>
      </Grid>

    </InitialPageLayout>
  )
}

export default HomePage