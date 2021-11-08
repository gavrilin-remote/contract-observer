import { ContractInput } from './ContractInput';
import { ContractStore } from './Contract';

const contractStore = new ContractStore();
const contractInputStore = new ContractInput(contractStore);

const observables = {
  contractInput: contractInputStore,
  contract: contractStore,
};

export default observables;
