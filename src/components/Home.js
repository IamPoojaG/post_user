import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './registration.css';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

function Home() {
  const navigate = useNavigate();

  const checkUserToken = () => {
    const email = localStorage.getItem('Email');
    const password = localStorage.getItem('Password');
    if (!email || !password) {
      navigate('/login');
    }
  };
  useEffect(() => {
    checkUserToken();
  }, []);

  function handlePost() {
    navigate('/post');
  }
  function handlePhotos() {
    navigate('/photos');
  }
  function handleLogout() {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
          <Toolbar>
            <div className='container'>
              <Typography variant='h6' component='div'>
                Home
              </Typography>
              <Typography variant='h6' component='div' onClick={handlePost}>
                Post
              </Typography>
              <Typography variant='h6' component='div' onClick={handlePhotos}>
                Photos
              </Typography>
            </div>
            <Button color='inherit' onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth='sm' style={{ marginTop: '5rem' }}>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemText primary='Click on the routes (Posts ar photos) to view' />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemText primary='In Photos section wait for sometime to load a data' />
          </ListItem>
        </List>
      </Container>
    </>
  );
}

export default Home;
