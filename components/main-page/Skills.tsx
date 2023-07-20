import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { ISkill } from '@/data';
import { SkillsDetails } from './SkillsDetails';

interface Props{
  skills: ISkill[]
  title: string
  useInSideLef?: boolean
}

export const Skills: FC<Props> = ({ skills, title, useInSideLef }) => {

  const [ scrollInY, setScrollInY ] = useState<number>(0);

  useEffect(() => {
    
    window.addEventListener('scroll', () => (
      setScrollInY( window.scrollY )
    ))


    return () => {
      window.removeEventListener('scroll', () => (setScrollInY(window.scrollY)))
    }
  }, [])

  return (

    <Grid container mt={2} mb={2}>

      <Typography variant='h3' component='h3' sx={{ display:{xs: 'block', sm: 'none'}}}>{title}</Typography>

      {
        useInSideLef && <SkillsDetails title={title}/>
      }

      <Grid item sm={12} md={6} mt={2} p={5} sx={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: { xs: 'center', md:'space-evenly'}}}>
          {
            skills.map( (skill, idx) => (
              <div key={idx} className={`${ scrollInY > 300 ? 'cardApear': ''}`} >
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
