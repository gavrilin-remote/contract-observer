import React, { useEffect } from 'react';
import { getInterfaceFromJson } from './services/contracts';
import { abi } from 'examples/mDAI.json';
import { Typography, Container } from '@material-ui/core';
import { InputBox } from './components/InputBox';
import { InterfaceContent } from './components/InterfaceContent';
import observables from 'observables';

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
        <InterfaceContent state={observables.contract} />
      </Container>
    </>
  );
}

export default App;
