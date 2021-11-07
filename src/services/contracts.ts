import { ethers } from 'ethers';

export const getInterfaceFromJson = (
  abi: Record<string, unknown>[]
): ethers.utils.Interface => {
  return new ethers.utils.Interface(abi);
};
