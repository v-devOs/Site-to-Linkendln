import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Grid, SxProps, Theme } from '@mui/material'
import { Navbar, SideMenu } from '@/components/ui'

interface Props{
  children: ReactNode
  title: string,
  description: string
}

const stylesMainContainer: SxProps<Theme> = {
  p: {sm: '90px auto', md: '80px 15%'}
} 

export const InitialPageLayout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>

        <meta name = 'og:title' content ={ title} />
        <meta name = 'og:description' content={description}/>
      </Head>

      

      <main style={{ height: '100vh'}} className='fadeIn'>
        <Grid container sx={stylesMainContainer}>

          <Grid item md={2}>
            <Grid item sx={{ display: { xs: 'none', md: 'block'}}}>
              <SideMenu/>
            </Grid>
          </Grid>

          <Grid item sm={12} md={10} sx={{ p: '0 30px'}}>
            { children }
          </Grid>

        </Grid>
      </main>
    </>
  )
}
