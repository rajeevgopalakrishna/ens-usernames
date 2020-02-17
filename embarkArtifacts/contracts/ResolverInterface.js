import EmbarkJS from '../embarkjs';

const ResolverInterfaceConfig = {"logger":{"events":{"domain":null,"_events":{"servicesState":[null,null],"blockchain:started":[null,null,null,null,null,null,null,null,null],"outputDone":[null,null,null,null,null,null],"storage:started":[null,null],"exit":[null,null]},"_eventsCount":153,"_maxListeners":350},"logLevels":["error","warn","info","debug","trace"],"logLevel":"info","context":["run","build"]},"abiDefinition":[{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"hash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ensAddr","type":"address"}],"name":"PublicResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"className":"ResolverInterface","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"PublicResolver(address)":"ebb045fa","addr(bytes32)":"3b3b57de","hash(bytes32)":"d8389dc5","setAddr(bytes32,address)":"d5fa2b00","setHash(bytes32,bytes32)":"d7fa1007","supportsInterface(bytes4)":"01ffc9a7"},"filename":"/home/petty/GitHub/status-im/ens-usernames/.embark/contracts/ens/ResolverInterface.sol","originalFilename":"contracts/ens/ResolverInterface.sol","path":"/home/petty/GitHub/status-im/ens-usernames/contracts/ens/ResolverInterface.sol","type":"file"};
const ResolverInterface = new EmbarkJS.Blockchain.Contract(ResolverInterfaceConfig);

export default ResolverInterface;
