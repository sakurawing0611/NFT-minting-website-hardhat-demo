const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RoboPunksNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const RoboPunksNFT = await ethers.getContractFactory("RoboPunksNFT");
    const roboPunksNFT = await RoboPunksNFT.deploy("Hello, world!");
    await roboPunksNFT.deployed();

    expect(await roboPunksNFT.greet()).to.equal("Hello, world!");

    const setGreetingTx = await roboPunksNFT.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await roboPunksNFT.greet()).to.equal("Hola, mundo!");
  });
});
