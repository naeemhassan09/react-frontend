import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Box, Typography } from '@mui/material';
import { logout } from '../../store/thunks/auth';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({}));
  };

  return (
    <>
      <Typography variant='h1' >Profile</Typography>
      <Box>
        <Button onClick={ handleLogout }>
          { /*  When Button include children, it is treated as plain */ }
          <Box>
            <Typography>logout</Typography>
          </Box>
        </Button>
      </Box>
    </>
  );
};
