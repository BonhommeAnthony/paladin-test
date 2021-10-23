import { Flex } from "@chakra-ui/layout";
import React from "react";
import HeaderButton from "./HeaderButton";
import Logo from "./Logo";

const HeaderContainer = () => {
  return (
    <Flex w="100%" position="absolute" top="0">
      <Flex
        mx="auto"
        px="24px"
        mt="24px"
        justifyContent="space-between"
        w="2000px"
        align="center"
      >
        <Logo />
        <HeaderButton />
      </Flex>
    </Flex>
  );
};

export default HeaderContainer;
