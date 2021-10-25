import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Pool from "./Pool.js";
import Switch from "./Switch";

const DashContainer = ({ pool, account, connectWallet }) => {
  const [isActive, setIsActive] = useState("pool");
  return (
    <Flex direction="column">
      <Switch isActive={isActive} setIsActive={setIsActive} />
      {isActive === "pool" ? (
        <Pool connectWallet={connectWallet} account={account} pool={pool} />
      ) : (
        <Dashboard connectWallet={connectWallet} account={account} />
      )}
    </Flex>
  );
};

export default DashContainer;
