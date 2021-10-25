import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import React from "react";

const HeaderAdress = ({ etherBalance, account }) => {
  return (
    <Flex>
      <Flex
        align="center"
        justify="center"
        borderRadius="10px"
        border="solid 4px #211A15"
        w="330px"
        h="40px"
        // justifyContent="space-between"
      >
        <Flex justify="center" w="125px">
          {etherBalance} ETH
        </Flex>
        <Flex
          justify="center"
          align="center"
          h="40px"
          color="white"
          borderRadius="10px"
          background="black"
          fontSize="16px"
          w="205px"
        >
          {account?.slice(0, 7)}...{account?.slice(38, 42)}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderAdress;
