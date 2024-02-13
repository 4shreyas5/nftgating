const express = require("express");
const {Web3} = require("web3")
const ABI = require("./ABI.json")

const app = express ()
const web3 = new Web3("https://crimson-dawn-patina.ethereum-sepolia.discover.quiknode.pro/47d071f4d9ceb04a91320d33bb735897a7691c20/")




const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})