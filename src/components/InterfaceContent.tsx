import React from 'react';
import { observer } from 'mobx-react-lite';
import { ContractStore } from '../observables/Contract';

type Props = {
  state: ContractStore;
};
const InterfaceContentComponent = ({ state }: Props) => {
  console.log('InterfaceContentComponent', { state });

  return <div></div>;
};

export const InterfaceContent = observer(InterfaceContentComponent);
