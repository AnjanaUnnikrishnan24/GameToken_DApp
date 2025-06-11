import React from "react";
import { ethers } from "ethers";
import { abi } from "../assets/GameToken.json";
import deployedAddress from "../assets/deployed_addresses.json";  

const Tokens = () => {
  const handleCreateToken = async () => {
    if (!window.ethereum) {
      alert("MetaMask not found!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contractAddress = deployedAddress["tokens#GameToken"];
    if (!contractAddress) {
      alert("Contract address not found!");
      return;
    }

    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const recipientAddress = "0x97C520ae9B87E759D81b909462CE993A0Aff1ebD";
      const amount = ethers.parseUnits("1000", 18);

      const tx = await contract.createToken(recipientAddress, amount);
      await tx.wait();
      alert("Token created successfully!");
    } catch (error) {
      console.error(error);
      alert("Error creating token");
    }
  };

  return (
    <div>
      <button onClick={handleCreateToken}>Create Token</button>
    </div>
  );
};

export default Tokens;

