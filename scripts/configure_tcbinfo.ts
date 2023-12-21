import { ethers } from "hardhat";
import { TCBInfoStruct } from "../typechain-types/contracts/AutomataDcapV3Attestation";

async function main() {
  const attestation = await ethers.getContractAt("AutomataDcapV3Attestation", process.env.ADDRESS);

  const tcbInfo = JSON.parse(process.env.TCB_INFO) as TCBInfoStruct.TCBInfoStruct.tcbInfo;
  await attestation.configureTcbInfoJson(tcbInfo.fmspc, tcbInfo);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
