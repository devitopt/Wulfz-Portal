const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")
const whitelistAddress = require("./testlist.json")

const leafNodes = whitelistAddress.map((addr) => keccak256(addr))

const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

// const root = tree.getRoot()
// console.log(typeof root)
console.log(tree.getHexRoot())
// console.log(tree.getRoot())

const claimingAddress = leafNodes[0]
const hexProof = tree.getHexProof(claimingAddress)

console.log(hexProof)
