const main = async () => {
  // Compile contract and generate necessary files we need to work with our contract,
  // these files will be put under artifact directory
  const nftContractFactory = await hre.ethers.getContractFactory("NFT");

  // HardHat creates local Eth network for us, only for this contract.
  // Then after the script completes it will destroy the local network
  // Everytime you run the contract, it'll be a fresh blockchain
  const nftContract = await nftContractFactory.deploy();

  // We wait until our contract is officially mined and deployed to local
  // blockchain. HardHat creates fake "miners" on our machine to try
  // to imitate the actual blockchain
  await nftContract.deployed();

  // Once we are deployed, this will give us the address of the deployed
  // contract. This address is how we actually find our contract on the
  // blockchain
  console.log("Contract deployed to: ", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
