import React from 'react'
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { projects } from '@/data'

export const Projects = () => {
  return (
    <Grid container mt={2} display='flex' justifyContent='space-around' gap={2}>
      {
        projects.map( ( project, idx ) => (
          <Card sx={{ width: '300px'}}>
            <CardContent>
              <Typography variant='h6' mb={2}>{project.name}</Typography>
              <Divider sx={{ width: '100%', color: '#252525'}}/>
              <Typography variant='body1' mt={2}>{project.description}</Typography>
            </CardContent>
          </Card>
        ))
      }
    </Grid>
  )
}
