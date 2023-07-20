import { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ISkill } from '@/data';
import { SkillsDetails } from './SkillsDetails';

interface Props{
  skills: ISkill[]
  title: string
  useInSideLef?: boolean
}

export const Skills: FC<Props> = ({ skills, title, useInSideLef }) => {
  return (

    <Grid container mt={2} mb={2}>

      <Typography variant='h3' component='h3' sx={{ display:{xs: 'block', sm: 'none'}}}>{title}</Typography>

      {
        useInSideLef && <SkillsDetails title={title}/>
      }

      <Grid item sm={12} md={6} mt={2} p={5} sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: { xs: 'center', md:'space-between'}}}>
          {
            skills.map( (skill, idx) => (
              <div  key={idx} >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                />

                  <Typography variant='body1'>{ skill.name }</Typography>
              </div>
            ))
          }

      </Grid>
      
      {
        !useInSideLef && <SkillsDetails title={title}/>
      }
    </Grid>

  )
}
