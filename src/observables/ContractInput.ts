import { makeObservable, observable, computed, action } from 'mobx';
import { ContractStore } from './Contract';

const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;

export class ContractInput {
  address: string;
  contractStore: ContractStore;
  abi: string;

  constructor(contractStore: ContractStore) {
    makeObservable(this, {
      abi: observable,
      address: observable,
      abiValid: computed,
      addressValid: computed,
      setAbi: action,
      setAddress: action,
    });
    this.abi = '';
    this.address = '';
    this.contractStore = contractStore;
  }

  setAbi = (input: string) => {
    this.abi = input.trim();
  };

  setAddress = (input: string) => {
    this.address = input.trim();
  };

  get abiValid(): boolean {
    if (!this.abi || !this.address) {
      return true;
    }
    try {
      JSON.parse(this.abi);
    } catch (e) {
      return false;
    }
    if (this.abi && this.address) {
      this.contractStore.makeContract(this.address, this.abi);
    }
    return true;
  }

  get addressValid(): boolean {
    if (!this.abi || !this.address) {
      return true;
    }
    return ethereumAddressRegex.test(this.address);
  }
}
