import { ethers } from "hardhat";
import { EnclaveIdStruct } from "../typechain-types/contracts/AutomataDcapV3Attestation";

async function main() {
  const attestation = await ethers.getContractAt("AutomataDcapV3Attestation", process.env.ADDRESS);

  const enclaveId = JSON.parse(process.env.QE_IDENTITY) as EnclaveIdStruct.EnclaveIdStruct;
  await attestation.configureQeIdentityJson(enclaveId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
