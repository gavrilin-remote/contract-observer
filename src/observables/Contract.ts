import { makeObservable, observable, action } from 'mobx';
import { ethers } from 'ethers';
type ContractInterface = ethers.utils.Interface;

export class ContractStore {
  interface: ContractInterface | undefined;
  // contract: ContractInterface | undefined;
  contractAddress: string;
  constructor() {
    makeObservable(this, {
      interface: observable,
      makeContract: action,
      setInterface: action,
    });
    this.contractAddress = '';
  }

  makeContract = (address: string, abi: string) => {
    const json = JSON.parse(abi);
    this.setInterface(new ethers.utils.Interface(json));
    this.contractAddress = address;
  };

  setInterface = (inf: ContractInterface) => {
    this.interface = inf;
  };
}
