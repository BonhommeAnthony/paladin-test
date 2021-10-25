import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Pool from "./Pool.js";
import Switch from "./Switch";

const DashContainer = ({ pool, account }) => {
  const [isActive, setIsActive] = useState("pool");
  return (
    <Flex direction="column">
      <Switch isActive={isActive} setIsActive={setIsActive} />
      {isActive === "pool" ? (
        <Pool account={account} pool={pool} isActive={isActive} />
      ) : (
        <Dashboard account={account} pool={pool} isActive={isActive} />
      )}
    </Flex>
  );
};

export default DashContainer;
