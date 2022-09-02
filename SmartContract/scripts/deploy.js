const { ethers } = require("hardhat");

async function main(){
    console.log("Contract being deployed");

    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_worldINstance = await HelloWorld.deploy("Hello");
    console.log("Contract deployed to address: ", hello_worldINstance.address);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });