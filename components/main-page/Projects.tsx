import React from 'react'
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { projects } from '@/data'

export const Projects = () => {
  return (
    <Grid container mt={2}   className='container-projects'>

      <Grid item xs={12} >
        <Typography variant="h2" component='h2'>Proyectos realizados</Typography>
        <Typography variant="h6" sx={{ fontSize: '20px'}} >
          Algunos proyectos no se encuentran desplegados, esto debido a que al tener un back-end o estar virtualizadas, requieren de un servidor
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ display:'flex', justifyContent:'space-around', gap:2, flexWrap: 'wrap', mt: 2}}>

        {
          projects.map( ( project ) => (
            <Card sx={{ width: { xs: '100%', md: '300px'}}} key={project.name}>
              <CardContent>
                <Typography variant='h6' mb={2}>{project.name}</Typography>
                <Divider sx={{ width: '100%', color: '#252525'}}/>
                <Typography variant='body1' mt={2}>{project.description}</Typography>
              </CardContent>
            </Card>
          ))
        }
      </Grid>

    </Grid>
  )
}
