import { Grid, Typography } from "@mui/material"
import { FC } from 'react';

interface Props{
  title: string
}

export const SkillsDetails: FC<Props> = ({ title }) => {
  return (
    <Grid item sm={12} md={6} display={{ xs: 'none', sm: 'block'}}>
      <Typography variant="h3" component='h3' mt={2} mb={2}>{ title }</Typography>
      <Typography variant="body1">
        Officia dolore laborum ullamco ea. Lorem commodo consequat consequat deserunt laborum id eiusmod. Occaecat officia proident duis velit eu qui dolore officia dolore esse aute exercitation id nulla. Ipsum pariatur est ut minim officia consectetur ut. Dolor exercitation dolor non excepteur eu consectetur nisi excepteur est. Sunt laboris ea elit reprehenderit elit Lorem proident Lorem id anim incididunt. Amet qui minim labore voluptate tempor.

        Elit tempor culpa ad do laborum non velit anim non reprehenderit aute. Consectetur sint nisi quis magna et adipisicing mollit irure officia est amet sunt esse ullamco. Reprehenderit reprehenderit ullamco deserunt excepteur aute quis velit deserunt deserunt eiusmod mollit irure minim irure. Excepteur consequat quis aliqua et Lorem laboris esse deserunt cillum pariatur ipsum pariatur proident cillum. Culpa amet pariatur duis esse aliqua aliquip reprehenderit in. Magna et veniam irure do commodo laboris.
      </Typography>
    </Grid>
  )
}
