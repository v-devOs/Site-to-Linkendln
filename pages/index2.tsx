import { AboutMe } from "@/components/main-page/AboutMe"
import { useWrite } from "@/hooks"
import { InitialPageLayout } from "@/layouts"
import { Grid, Typography } from "@mui/material"

const index2 = () => {

  const { actualPhrase } = useWrite('Hola! Soy Uriel Galindo')

  return (
    <InitialPageLayout title="Uriel Galindo" description="Mi sitio web creado para divulgar un poco de mis habilidades y proyectos realizados">
      <Grid 
        container 
        className="container-header"
      >
        <header>
          <Typography variant="h1" component='h1'>{ actualPhrase }</Typography>
          <Typography variant="body2">'Si puedes imaginarlo puedes programarlo' - Alejandro Taboada</Typography>
        </header>
      </Grid>

      <Grid
        container
        className="ejemplo"
        sx={{ m: { sm: '60vh 10px', md: '60vh 30px'}, background: '#101010', width: '100%', borderRadius: '20px', p: { sm: '20px', md: '30px'} }}
      >

        <AboutMe/>
      </Grid>


    </InitialPageLayout>
  )
}

export default index2