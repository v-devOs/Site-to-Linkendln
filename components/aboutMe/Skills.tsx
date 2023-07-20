import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { skills } from '../../data/skills';
import Image from 'next/image';

export const Skills = () => {
  return (
    <Grid container spacing={2} display='flex' justifyContent='space-between'>
      
      {
        skills.map( (skill, idx) => (
          <Grid item mt={2} sx={{ textAlign: 'center', mt:5}} key={idx}>
            <Image
              src={skill.image}
              alt={skill.name}
              width={100}
              height={100}
            />

            <Typography variant='body1'>{ skill.name }</Typography>
          </Grid>
        ))
      }

    </Grid>
  )
}
