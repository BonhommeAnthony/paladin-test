import { Flex } from "@chakra-ui/layout";
import React from "react";
import HeaderAdress from "./HeaderAdress";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

const HeaderContainer = ({ connectWallet, account, etherBalance }) => {
  return (
    <Flex w="100%" position="absolute" top="0">
      <Flex
        mx="auto"
        px={["0", "24px"]}
        mt="24px"
        justifyContent="space-between"
        w="2000px"
        align="center"
        display={["none", "flex"]}
      >
        <Logo />
        {account ? (
          <HeaderAdress etherBalance={etherBalance} account={account} />
        ) : (
          <HeaderButton connectWallet={connectWallet} />
        )}
      </Flex>
    </Flex>
  );
};

export default HeaderContainer;
