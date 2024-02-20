const express = require("express");
const {Web3} = require("web3")
const ABI = require("./ABI.json")

const app = express ()
app.use(express.json())
const web3 = new Web3("https://crimson-dawn-patina.ethereum-sepolia.discover.quiknode.pro/47d071f4d9ceb04a91320d33bb735897a7691c20/")
const contractAddress = "0x97E53339B93381B2289D26CF5950187C3BBA4683"

const contract = new web3.eth.Contract(ABI, contractAddress);

const fetchNFTs = async(account)=>{
    try{
       const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       console.log(account)
       const numNFTs = await fetchNFTs(account)

       if(numNFTs.userNFTs>0){
         res.status(200).json({status:200,numNFTs})
       }else{
         res.status(404).json({status:404,message:"You don't own any nft",numNFTs});
       }
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})



const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})

// const express = require("express");
// const app = express();

// const PORT = 3000;

// // Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a simple response to the client
});

// // Start the server and listen on port 3000
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });
