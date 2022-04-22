import React from "react"
import Web3 from "web3"

import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"

import WulfzNFT from "../../abi/WulfzNFT.json"
import whitelistAddress from "../../abi/whitelist.json"

import CustomModal from "../../components/Modal"
import mintImg from "../../new/banner/mint.png"

const web3 = new Web3(window.ethereum)
const contract = new web3.eth.Contract(
	WulfzNFT,
	"0x9712228cEeDA1E2dDdE52Cd5100B88986d1Cb49c"
)

export default function MintBtn({ txt, amount }) {
	const [open, setOpen] = React.useState(false)
	const [text, setText] = React.useState("")

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const mintToken = async () => {
		const _account = await web3.eth.getAccounts()

		let myIndex
		const leafNodes = whitelistAddress.map((addr, index) => {
			if (addr.toLocaleLowerCase() == _account[0].toLocaleLowerCase()) {
				myIndex = index
			}
			return keccak256(addr)
		})

		const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

		if (myIndex == undefined) {
			setText("You are not whitelisted, please try Public Sale")
			handleOpen()
			return
		}
		const hexProof = tree.getHexProof(leafNodes[myIndex])

		if (hexProof.length === 0) {
			setText("You are not whitelisted, please try Public Sale")
			handleOpen()
			return
		}

		// 80000000000000000 = 0.0.8 ETH, web3.utils
		const price = amount * 80000000000000000

		try {
			const result = await contract.methods.Presale(hexProof).send({
				from: _account[0],
				value: price,
			})
			setText(
				"Successfully Minted. Please visit https://opensea.io/collection/wulfz-official"
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${mintImg})`,
					backgroundSize: "100% 100%",
				}}
				className="mintButton"
				onClick={() => mintToken()}
			>
				{txt}
			</div>
			<CustomModal isOpen={open} modalClose={handleClose} txt={text} />
		</div>
	)
}
