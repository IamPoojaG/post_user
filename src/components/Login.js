import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './registration.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [emailLog, setEmailLog] = useState(' ');
  const [passwordLog, setPasswordLog] = useState(' ');
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem('Password').replace(/"/g, '');
    let mail = localStorage.getItem('Email').replace(/"/g, '');

    if (passwordLog === pass || emailLog === mail) {
      navigate('/');
    } else {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 3000);
    }
  }

  function handleClick() {
    navigate('/registration');
  }

  return (
    <>
      <div>
        {flag && (
          <Alert
            style={{ width: '20rem', margin: '0 auto 0 auto' }}
            severity='error'
          >
            Fill correct Info else keep trying.
          </Alert>
        )}
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleLogin}
        >
          <div className='form-group'>
            <h3> Login</h3>
            <TextField
              id='outlined'
              label='Email'
              placeholder='Enter Email'
              name='password'
              onChange={(event) => setEmailLog(event.target.value)}
            />
            <TextField
              id='outlined'
              label='Password'
              placeholder='Enter Password'
              name='phone number'
              onChange={(event) => setPasswordLog(event.target.value)}
            />
            <Button type='submit' variant='outlined'>
              <span>Login</span>
            </Button>
            <p
              onClick={handleClick}
              className='forgot-password text-right'
              style={{ cursor: 'pointer' }}
            >
              Don't have credential register again
            </p>
          </div>
        </Box>
      </div>
    </>
  );
}

export default Login;
