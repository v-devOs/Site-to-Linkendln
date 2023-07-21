import { useContext } from 'react';
import NextLink from 'next/link'
import { Divider, Drawer, Link, List, ListItem } from '@mui/material';
import { navbarHeaders } from '@/data';
import { UIContext } from '@/context/ui';


export const SideMenu = () => {

  const { isActiveSideMenu, toggleSideMenuOrModal} = useContext(UIContext)

  return (
    <Drawer
      anchor='top'
      open={isActiveSideMenu}
      onClose={ () => toggleSideMenuOrModal(true) }
    >

      <List sx={{ background: '#101010'}}>
        {
          navbarHeaders.map( header => (
            <ListItem  key={header.linkPage}>
              <NextLink passHref href={header.linkPage}>
                <Link component='span'>
                  {header.sectionName}
                </Link>
              </NextLink>
              <Divider/>
            </ListItem>

          ))
        }
      </List>
    </Drawer>
  )
}
