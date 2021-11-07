import React, { useEffect } from 'react';
import { getInterfaceFromJson } from './services/contracts';
import { abi } from 'examples/mDAI.json';
import { Typography, Container } from '@material-ui/core';
import { InputBox } from './components/InputBox';

function App() {
  useEffect(() => {
    const i = getInterfaceFromJson(abi);
    console.log({ i });
  }, []);
  return (
    <>
      <Container>
        <Typography variant='h3' component='h3'>
          Ethereum Smart contracts playground
        </Typography>
        <InputBox />
      </Container>
    </>
  );
}

export default App;
