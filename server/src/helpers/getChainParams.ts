import { nodeBatchRequest } from '../utils';

export async function getChainParams(address: string) {
  const batch = [
    { id: 0, method: 'chain_getBlockHash', params: [0] },
    { id: 1, method: 'state_getMetadata' },
    { id: 2, method: 'state_getRuntimeVersion' },
  ];

  const batchResult = await nodeBatchRequest(address, batch);

  let metadataRpc: string, genesis: string, transactionVersion: number, specVersion: number, specName: string;

  for (let { id, result } of batchResult) {
    switch (id) {
      case 0: {
        genesis = result;
        break;
      }
      case 1: {
        metadataRpc = result;
        break;
      }
      case 2: {
        transactionVersion = result.transactionVersion;
        specName = result.specName;
        specVersion = result.specVersion;
        break;
      }
    }
  }
  return { metadataRpc, genesis, transactionVersion, specVersion, specName };
}
