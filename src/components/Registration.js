import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './registration.css';
import Alert from '@mui/material/Alert';

import { useNavigate } from 'react-router-dom';

function Registration() {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();

  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!Name || !email || !password || !phoneNumber) {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 3000);
    } else {
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('Password', JSON.stringify(password));
      navigate('/login');
    }
  }

  function handleClick() {
    navigate('/login');
  }
  return (
    <>
      <div>
        {' '}
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleFormSubmit}
          style={{ width: '25rem', margin: '0 auto 0 auto' }}
        >
          {flag && (
            <Alert severity='error'>
              I got it you are in hurry! But every Field is important!
            </Alert>
          )}

          <div className='form-group'>
            <h3>Register</h3>
            <TextField
              id='outlined'
              label='Name'
              placeholder='Enter Name'
              name='Name'
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              id='outlined'
              label='Email'
              placeholder='Enter email'
              name='email'
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id='outlined'
              label='Password'
              placeholder='Enter password'
              name='password'
              type='password'
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              id='outlined'
              label='Phone Number'
              placeholder='Enter phone number'
              name='phone number'
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <Button loading type='submit' variant='outlined'>
              <span>Submit</span>
            </Button>
            <p onClick={handleClick} className='forgot-password text-right'>
              Already registered log in?
            </p>
          </div>
        </Box>
      </div>
    </>
  );
}

export default Registration;
