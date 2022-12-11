/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Chaintify, ChaintifyInterface } from "../../contracts/Chaintify";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSupply_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id_",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000033565b506200012f565b8051620000489060029060208401906200004c565b5050565b8280546200005a90620000f2565b90600052602060002090601f0160209004810192826200007e5760008555620000c9565b82601f106200009957805160ff1916838001178555620000c9565b82800160010185558215620000c9579182015b82811115620000c9578251825591602001919060010190620000ac565b50620000d7929150620000db565b5090565b5b80821115620000d75760008155600101620000dc565b600181811c908216806200010757607f821691505b602082108114156200012957634e487b7160e01b600052602260045260246000fd5b50919050565b611949806200013f6000396000f3fe608060405234801561001057600080fd5b50600436106100c85760003560e01c8063869f759411610081578063bd85b0391161005b578063bd85b039146101b1578063e985e9c5146101d1578063f242432a1461020d57600080fd5b8063869f75941461016b578063a22cb4651461018b578063aac486531461019e57600080fd5b80630e89341c116100b25780630e89341c146101165780632eb2c2d6146101365780634e1273f41461014b57600080fd5b8062fdd58e146100cd57806301ffc9a7146100f3575b600080fd5b6100e06100db36600461119c565b610220565b6040519081526020015b60405180910390f35b6101066101013660046111df565b6102c9565b60405190151581526020016100ea565b610129610124366004611203565b61031b565b6040516100ea9190611269565b6101496101443660046113d2565b6103bd565b005b61015e61015936600461147c565b610450565b6040516100ea9190611582565b6100e0610179366004611203565b60046020526000908152604090205481565b610149610199366004611595565b61058e565b6101496101ac3660046115d1565b61059d565b6100e06101bf366004611203565b60056020526000908152604090205481565b6101066101df366004611678565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61014961021b3660046116ab565b6106de565b60006001600160a01b0383166102a35760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806102fa57506001600160e01b031982166303a24d0760e21b145b8061031557506301ffc9a760e01b6001600160e01b03198316145b92915050565b600081815260036020526040902080546060919061033890611710565b80601f016020809104026020016040519081016040528092919081815260200182805461036490611710565b80156103b15780601f10610386576101008083540402835291602001916103b1565b820191906000526020600020905b81548152906001019060200180831161039457829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103d957506103d985336101df565b61043c5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201526d195c881bdc88185c1c1c9bdd995960921b606482015260840161029a565b610449858585858561076a565b5050505050565b606081518351146104c95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161029a565b6000835167ffffffffffffffff8111156104e5576104e561127c565b60405190808252806020026020018201604052801561050e578160200160208202803683370190505b50905060005b8451811015610586576105598582815181106105325761053261174b565b602002602001015185838151811061054c5761054c61174b565b6020026020010151610220565b82828151811061056b5761056b61174b565b602090810291909101015261057f81611777565b9050610514565b509392505050565b6105993383836109dd565b5050565b6105a986868684610ad2565b6105b38585610bdd565b60008581526004602052604090205461062857828411156106165760405162461bcd60e51b815260206004820152601560248201527f416d6f756e74207468616e206d6178537570706c790000000000000000000000604482015260640161029a565b60008581526004602052604090208390555b6000858152600360205260408120805461064190611710565b80601f016020809104026020016040519081016040528092919081815260200182805461066d90611710565b80156106ba5780601f1061068f576101008083540402835291602001916106ba565b820191906000526020600020905b81548152906001019060200180831161069d57829003601f168201915b505050505090508051600014156106d5576106d58684610c0d565b50505050505050565b6001600160a01b0385163314806106fa57506106fa85336101df565b61075d5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201526d195c881bdc88185c1c1c9bdd995960921b606482015260840161029a565b6104498585858585610c31565b81518351146107e15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161029a565b6001600160a01b0384166108455760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161029a565b3360005b845181101561096f5760008582815181106108665761086661174b565b6020026020010151905060008583815181106108845761088461174b565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156109175760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161029a565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610954908490611792565b925050819055505050508061096890611777565b9050610849565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516109bf9291906117aa565b60405180910390a46109d5818787878787610ddc565b505050505050565b816001600160a01b0316836001600160a01b03161415610a655760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161029a565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610b325760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b606482015260840161029a565b336000610b3e85610f91565b90506000610b4b85610f91565b90506000868152602081815260408083206001600160a01b038b16845290915281208054879290610b7d908490611792565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46106d583600089898989610fdc565b600082815260056020526040902054610bf7908290611792565b6000928352600560205260409092209190915550565b60008281526003602090815260409091208251610c2c928401906110e7565b505050565b6001600160a01b038416610c955760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b606482015260840161029a565b336000610ca185610f91565b90506000610cae85610f91565b90506000868152602081815260408083206001600160a01b038c16845290915290205485811015610d345760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b606482015260840161029a565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610d71908490611792565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610dd1848a8a8a8a8a610fdc565b505050505050505050565b6001600160a01b0384163b156109d55760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610e2090899089908890889088906004016117d8565b602060405180830381600087803b158015610e3a57600080fd5b505af1925050508015610e6a575060408051601f3d908101601f19168201909252610e6791810190611836565b60015b610f2057610e76611853565b806308c379a01415610eb05750610e8b61186f565b80610e965750610eb2565b8060405162461bcd60e51b815260040161029a9190611269565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161029a565b6001600160e01b0319811663bc197c8160e01b146106d55760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161029a565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610fcb57610fcb61174b565b602090810291909101015292915050565b6001600160a01b0384163b156109d55760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061102090899089908890889088906004016118f9565b602060405180830381600087803b15801561103a57600080fd5b505af192505050801561106a575060408051601f3d908101601f1916820190925261106791810190611836565b60015b61107657610e76611853565b6001600160e01b0319811663f23a6e6160e01b146106d55760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161029a565b8280546110f390611710565b90600052602060002090601f016020900481019282611115576000855561115b565b82601f1061112e57805160ff191683800117855561115b565b8280016001018555821561115b579182015b8281111561115b578251825591602001919060010190611140565b5061116792915061116b565b5090565b5b80821115611167576000815560010161116c565b80356001600160a01b038116811461119757600080fd5b919050565b600080604083850312156111af57600080fd5b6111b883611180565b946020939093013593505050565b6001600160e01b0319811681146111dc57600080fd5b50565b6000602082840312156111f157600080fd5b81356111fc816111c6565b9392505050565b60006020828403121561121557600080fd5b5035919050565b6000815180845260005b8181101561124257602081850181015186830182015201611226565b81811115611254576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006111fc602083018461121c565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156112b8576112b861127c565b6040525050565b600067ffffffffffffffff8211156112d9576112d961127c565b5060051b60200190565b600082601f8301126112f457600080fd5b81356020611301826112bf565b60405161130e8282611292565b83815260059390931b850182019282810191508684111561132e57600080fd5b8286015b848110156113495780358352918301918301611332565b509695505050505050565b600067ffffffffffffffff83111561136e5761136e61127c565b604051611385601f8501601f191660200182611292565b80915083815284848401111561139a57600080fd5b83836020830137600060208583010152509392505050565b600082601f8301126113c357600080fd5b6111fc83833560208501611354565b600080600080600060a086880312156113ea57600080fd5b6113f386611180565b945061140160208701611180565b9350604086013567ffffffffffffffff8082111561141e57600080fd5b61142a89838a016112e3565b9450606088013591508082111561144057600080fd5b61144c89838a016112e3565b9350608088013591508082111561146257600080fd5b5061146f888289016113b2565b9150509295509295909350565b6000806040838503121561148f57600080fd5b823567ffffffffffffffff808211156114a757600080fd5b818501915085601f8301126114bb57600080fd5b813560206114c8826112bf565b6040516114d58282611292565b83815260059390931b85018201928281019150898411156114f557600080fd5b948201945b8386101561151a5761150b86611180565b825294820194908201906114fa565b9650508601359250508082111561153057600080fd5b5061153d858286016112e3565b9150509250929050565b600081518084526020808501945080840160005b838110156115775781518752958201959082019060010161155b565b509495945050505050565b6020815260006111fc6020830184611547565b600080604083850312156115a857600080fd5b6115b183611180565b9150602083013580151581146115c657600080fd5b809150509250929050565b60008060008060008060c087890312156115ea57600080fd5b6115f387611180565b9550602087013594506040870135935060608701359250608087013567ffffffffffffffff8082111561162557600080fd5b818901915089601f83011261163957600080fd5b6116488a833560208501611354565b935060a089013591508082111561165e57600080fd5b5061166b89828a016113b2565b9150509295509295509295565b6000806040838503121561168b57600080fd5b61169483611180565b91506116a260208401611180565b90509250929050565b600080600080600060a086880312156116c357600080fd5b6116cc86611180565b94506116da60208701611180565b93506040860135925060608601359150608086013567ffffffffffffffff81111561170457600080fd5b61146f888289016113b2565b600181811c9082168061172457607f821691505b6020821081141561174557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561178b5761178b611761565b5060010190565b600082198211156117a5576117a5611761565b500190565b6040815260006117bd6040830185611547565b82810360208401526117cf8185611547565b95945050505050565b60006001600160a01b03808816835280871660208401525060a0604083015261180460a0830186611547565b82810360608401526118168186611547565b9050828103608084015261182a818561121c565b98975050505050505050565b60006020828403121561184857600080fd5b81516111fc816111c6565b600060033d111561186c5760046000803e5060005160e01c5b90565b600060443d101561187d5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156118ad57505050505090565b82850191508151818111156118c55750505050505090565b843d87010160208285010111156118df5750505050505090565b6118ee60208286010187611292565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261193160a083018461121c565b97965050505050505056fea164736f6c6343000809000a";

type ChaintifyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChaintifyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Chaintify__factory extends ContractFactory {
  constructor(...args: ChaintifyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Chaintify> {
    return super.deploy(overrides || {}) as Promise<Chaintify>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Chaintify {
    return super.attach(address) as Chaintify;
  }
  override connect(signer: Signer): Chaintify__factory {
    return super.connect(signer) as Chaintify__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChaintifyInterface {
    return new utils.Interface(_abi) as ChaintifyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Chaintify {
    return new Contract(address, _abi, signerOrProvider) as Chaintify;
  }
}
