import { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ISkill } from '@/data';

interface Props{
  skills: ISkill[]
}

export const Skills: FC<Props> = ({ skills }) => {
  return (
    <Grid container spacing={5} mt={2} mb={5}>
      
      {
        skills.map( (skill, idx) => (
          <Grid item mt={2} sx={{ textAlign: 'center', mt:2}} key={idx}>
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
