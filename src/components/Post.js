import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/features/postSlice';

const Post = () => {
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const checkUserToken = () => {
    const email = localStorage.getItem('Email');
    const password = localStorage.getItem('Password');
    if (!email || !password) {
      navigate('/login');
    }
  };
  useEffect(() => {
    checkUserToken();
    dispatch(getPosts());
  }, []);

  function handleHome() {
    navigate('/');
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
              <Typography variant='h6' component='div' onClick={handleHome}>
                Home
              </Typography>
              <Typography variant='h6' component='div'>
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
      <div className='card_container'>
        {posts.map((item) => (
          <Card sx={{ maxWidth: 345 }} className='card'>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Post;
