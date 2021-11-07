import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export const ManualInput = (): React.ReactElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <Typography style={{ marginBottom: '20px' }} component={'p'}>
        Past contract address and abi here:
      </Typography>
      <TextField
        style={{ marginBottom: '20px' }}
        id='outlined-basic'
        label='Contract address'
        variant='outlined'
      />
      <TextField
        id='outlined-multiline-flexible'
        label='ABI'
        multiline
        value={''}
        onChange={() => {
          console.log('mn');
        }}
      />
    </div>
  );
};
