import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardMedia from '@mui/material/CardMedia';
const data = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
];
const Photos = () => {
  const [photos] = useState(data);
  const navigate = useNavigate();
  function handleHome() {
    navigate('/home');
  }
  function handlePost() {
    navigate('/post');
  }
  function handleLogout() {
    navigate('/login');
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <div className='container'>
              <Typography variant='h6' component='div' onClick={handleHome}>
                Home
              </Typography>
              <Typography variant='h6' component='div' onClick={handlePost}>
                Post
              </Typography>
              <Typography variant='h6' component='div' onClick={handleLogout}>
                Photos
              </Typography>
            </div>
            <Button color='inherit'>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='card_container'>
        {photos.map((data) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {data.title}
                </Typography>
              </CardContent>
              <CardMedia component='img' height='140' img src={data.url} />
              <CardMedia
                component='img'
                height='140'
                image
                src={data.thumbnailUrl}
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Photos;
