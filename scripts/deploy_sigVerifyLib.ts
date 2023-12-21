import { ethers } from "hardhat";
import { EnclaveIdStruct, TCBInfoStruct } from "../typechain-types/contracts/AutomataDcapV3Attestation";
import fs from 'fs';

async function main() {
  const sigVerifyLib = await ethers.deployContract("SigVerifyLib", [], {});
  await sigVerifyLib.waitForDeployment();
  const sigVerifyLibAddr = await sigVerifyLib.getAddress();
  console.log(sigVerifyLibAddr);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
