import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ManualInput } from './ManualInput';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const InputBox = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <ManualInput />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
