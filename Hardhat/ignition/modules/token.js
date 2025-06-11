import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokens = buildModule("tokens", (m) => {
  const initialSupply = 1000n * 10n ** 18n;

  const token = m.contract("GameToken", [initialSupply]);

  return { token };
});

export default tokens;
