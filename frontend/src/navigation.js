import './css/navigation.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';




const pages = ['History', 'Characters', 'Locations'];


export function ResponsiveAppBar(){




  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
  

              <img alt = "monsterbros" height="70px" width="150px" src = "https://drive.google.com/thumbnail?id=1v9OABqlaYqBsCCbQkgK2o35Sb83oHfj8" />
              <img alt="baddudes" height = '70px' display='flex' justifyContents='center' src = "https://drive.google.com/thumbnail?id=1lHsXRNcALxRSVrOnKZ9b172qmbav4Wp5" />
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

      
        </Toolbar>
      </Container>
    </AppBar>
  );
};