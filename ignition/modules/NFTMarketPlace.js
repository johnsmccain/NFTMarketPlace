const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// import {buildModule } from "@nomicfoundation/hardhat-ignition"
// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("NFTMarketPlaceModule", (m) => {
  // const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  // const add = m.getAccount(1)

  const nftMarketPlace = m.contract("NFTMarketPlace");

  // console.log(`Smart Contract Address: ${add}`)
  return { nftMarketPlace };
});
