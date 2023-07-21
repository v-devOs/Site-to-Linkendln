import { Grid, Typography } from "@mui/material"
import { FC } from 'react';

interface Props{
  title: string
  description: string
}

export const SkillsDetails: FC<Props> = ({ title, description }) => {
  return (
    <Grid item sm={12} md={6} display={{ xs: 'none', sm: 'block'}}>
      <Typography variant="h3" component='h3' mt={2} mb={2}>{ title }</Typography>
      <Typography variant="body1">
        { description }
      </Typography>
    </Grid>
  )
}
