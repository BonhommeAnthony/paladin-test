import { Button } from "@chakra-ui/button";
import { Box, Container, Flex } from "@chakra-ui/layout";
import DashContainer from "../components/Dashboard/DashContainer";

import HeaderContainer from "../components/Header/HeaderContainer";

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      background="radial-gradient(163.62% 163.62% at 50% -45.31%, #EF8171 0%, #F9DD56 99.87%);"
    >
      <HeaderContainer />
      <DashContainer />
    </Flex>
  );
}
