import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Switch from "./Switch";

const DashContainer = () => {
  const [isActive, setIsActive] = useState("pool");
  return (
    <Flex direction="column">
      <Switch isActive={isActive} setIsActive={setIsActive} />
      <Dashboard isActive={isActive} />
    </Flex>
  );
};

export default DashContainer;
