import React from 'react';
import { ContractInput } from '../observables/ContractInput';
import { Typography, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

type Props = {
  state: ContractInput;
};
const ManualInputComponent = ({ state }: Props): React.ReactElement => {
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    state.setAddress(e.target.value);
  };
  const onAbiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    state.setAbi(e.target.value);
  };
  console.log({ state });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <Typography style={{ marginBottom: '20px' }} component={'p'}>
        Past contract address and abi here:
      </Typography>
      <TextField
        error={!state.addressValid}
        onChange={onAddressChange}
        value={state.address}
        style={{ marginBottom: '20px' }}
        id='outlined-basic'
        label='Contract address'
        variant='outlined'
      />
      <TextField
        variant='outlined'
        error={!state.abiValid}
        id='outlined-multiline-flexible'
        label='ABI'
        multiline
        maxRows={20}
        minRows={8}
        value={state.abi}
        onChange={onAbiChange}
      />
    </div>
  );
};

export const ManualInput = observer(ManualInputComponent);
