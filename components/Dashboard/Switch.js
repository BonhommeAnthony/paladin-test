import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";

const Switch = ({ isActive, setIsActive }) => {
  return (
    <Flex
      align="center"
      justify="center"
      p="10px 11px"
      borderRadius="10px"
      border="solid 4px #211A15"
      w="264px"
      h="60px"
      justifyContent="space-between"
    >
      <Flex>
        <Button
          onClick={() => setIsActive("pool")}
          bgColor={isActive === "pool" ? "black" : null}
          color={isActive === "pool" ? "white" : "black"}
          fontWeight={isActive === "pool" ? "700" : "400"}
          variant="unstyled"
          w="110px"
          borderRadius="10px"
        >
          Pool
        </Button>
      </Flex>
      <Flex>
        <Button
          borderRadius="10px"
          onClick={() => setIsActive("dashboard")}
          bgColor={isActive === "pool" ? null : "black"}
          color={isActive === "pool" ? "black" : "white"}
          fontWeight={isActive === "pool" ? "400" : "700"}
          variant="unstyled"
          w="110px"
        >
          Dashboard
        </Button>
      </Flex>
    </Flex>
  );
};

export default Switch;
