import Image from "next/image"
import { Grid, Typography } from "@mui/material"

export const AboutMe = () => {
  return (
    <>
      <Grid container mb={5} display='flex' justifyContent='space-between' alignItems='center'>
        <Grid item >
          <Typography variant='h1' component='h1'>Acerca de mi</Typography>
        </Grid>
      </Grid>

      <Grid container>

        <Grid item sm={12} md={4} >
          <Image
            src='/images/me.jpg'
            width={190}
            height={250}
            alt='Imagen mia'
            style={{ borderRadius: 2}}
          />
        </Grid>

        <Grid item sm={12} md={8} >
          <Typography variant='body1'>Culpa dolor fugiat ea ut occaecat pariatur nisi dolore. Dolor laboris consequat nostrud esse et laborum minim do cillum. Non aliqua et Lorem ex ad commodo commodo in eu reprehenderit anim. Velit cillum irure laboris culpa et.</Typography>
        </Grid>

        <Grid container mt={2}>
          <Grid item>
            <Typography variant="body1">Nostrud consequat mollit ipsum mollit. Eiusmod nulla ad Lorem laboris. Quis minim eu mollit laborum occaecat. Excepteur elit laborum officia non velit voluptate laborum culpa Lorem commodo aliqua. Anim dolor aliqua officia quis ut pariatur sit laboris excepteur. Aute tempor nostrud ea et occaecat nulla exercitation.</Typography>
          </Grid>

          
        
        </Grid>

        
      </Grid>
    </>
  )
}
