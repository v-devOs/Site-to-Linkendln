import { AboutMe, Projects, Skills } from "@/components/main-page"
import { skillsBackEnd, skillsFrontEnd } from "@/data"
import { InitialPageLayout } from "@/layouts"
import { Grid, Typography } from "@mui/material"
import { useWrite } from '../hooks/useWrite';
import { Footer, SideMenu } from "@/components/ui";

const HomePage = () => {

  const { actualPhrase } = useWrite('Hola!, Soy Uriel Galindo')

  return (
    <InitialPageLayout title="Uriel Galindo" description="Mi sitio web creado para divulgar un poco de mis habilidades y proyectos realizados">
      <SideMenu/>
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
        sx={{ m: { xs: '50vh 10px 20px', md: '60vh 30px 20px'}, background: '#101010', width: '100%', borderRadius: '20px', p: '20px'}}
      >

        <AboutMe/>

        <Typography variant="h2" component='h2' mt={2}>Tecnologias para desarrollo</Typography>
        <Skills skills={skillsFrontEnd} title="Front-End"/>
        
        <Skills skills={skillsBackEnd} title="Back-End" useInSideLef={true}/>

        <hr style={{ width: '100%'}}/>

        <Projects/>
      </Grid>

    </InitialPageLayout>
  )
}

export default HomePage