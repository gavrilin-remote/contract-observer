import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { ContractInput } from '../observables/ContractInput';

type Props = {
  state: ContractInput;
};

const FileInputComponent = ({ state }: Props) => {
  const onChange = (files: File[]) => {
    if (!files.length) {
      return;
    }
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (evt) {
      if (evt.target && typeof evt.target.result === 'string') {
        const json = JSON.parse(evt.target.result);
        if (json.address) {
          state.setAddress(json.address);
        }
        console.log(json.abi);
        if (json.abi) {
          state.setAbi(JSON.stringify(json.abi));
        }
      }
    };
    reader.onerror = function (evt) {
      alert('Something went wrong');
      if (evt.target) {
        console.log(evt.target.result);
      }
    };
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <Typography style={{ marginBottom: '20px' }} component={'p'}>
        Or upload from file:
      </Typography>
      <DropzoneArea onChange={onChange} acceptedFiles={['application/json']} />
    </div>
  );
};

export const FileInput = observer(FileInputComponent);
