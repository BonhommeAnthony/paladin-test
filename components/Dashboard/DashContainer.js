import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Pool from "./Pool.js";
import Switch from "./Switch";

const DashContainer = ({ data, account, connectWallet, isLoading }) => {
  const [isActive, setIsActive] = useState("pool");
  return (
    <Flex direction="column">
      <Switch isActive={isActive} setIsActive={setIsActive} />
      {isActive === "pool" ? (
        <Pool
          isLoading={isLoading}
          connectWallet={connectWallet}
          account={account}
          data={data}
        />
      ) : (
        <Dashboard
          isLoading={isLoading}
          data={data}
          connectWallet={connectWallet}
          account={account}
        />
      )}
    </Flex>
  );
};

export default DashContainer;
