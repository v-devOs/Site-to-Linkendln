import NextLink from 'next/link'
import { AppBar, Divider, Drawer, Link, List, ListItem, Toolbar, Typography } from '@mui/material';
import { headerNavbar } from './constans';


export const SideMenu = () => {
  return (
    <div >
      <Toolbar/>

      <List>
        <Typography variant='h6' component='h6'>v-Devos</Typography>
        <Divider/>

        {
          headerNavbar.map( header => (
            <ListItem key={header.sectionName}>
              <NextLink href={header.linkPage} passHref>
                <Link component='span'>
                  <Typography key={header.linkPage}>{header.sectionName}</Typography>
                </Link>
              </NextLink>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}
