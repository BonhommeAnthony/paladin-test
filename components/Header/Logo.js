import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";

const Logo = () => {
  return (
    <Flex>
      <Image src="/logoPaladin.svg" alt="Segun Adebayo" />
    </Flex>
  );
};

export default Logo;
