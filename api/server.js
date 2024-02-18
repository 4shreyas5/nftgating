const express = require("express");
const {Web3} = require("web3")
const ABI = require("./ABI.json")

const app = express ()
const web3 = new Web3("https://crimson-dawn-patina.ethereum-sepolia.discover.quiknode.pro/47d071f4d9ceb04a91320d33bb735897a7691c20/")
const contractAddress = "0x97E53339B93381B2289D26CF5950187C3BBA4683"

const contract = new web3.eth.Contract(ABI, contractAddress);

const fetchNFTs = async () => {
    try {
        const nftBalance = await contract.methods.balanceOf("0xd2675e4f825114C1DDEfa745D823f6448A8B1f7d")
        return{userNFTs:nftBalance}
    } catch (error) {
        console.error(error)
    }

}





const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})