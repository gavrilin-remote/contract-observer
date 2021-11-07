import * as React from 'react';
import { ManualInput } from './ManualInput';
import { FileInput } from './FileInput';
import observables from 'observables';
import { Grid, Paper, Box } from '@material-ui/core';

export const InputBox = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper>
            <ManualInput state={observables.contractInput} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <FileInput state={observables.contractInput} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
