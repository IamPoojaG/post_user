import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './registration.css';

function Home() {
  const navigate = useNavigate();

  function handlePost() {
    navigate('/post');
  }
  function handlePhotos() {
    navigate('/photos');
  }
  function handleLogout() {
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
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
  );
}

export default Home;
