import { Button } from "@chakra-ui/button";
import { Box, Text, Flex } from "@chakra-ui/layout";
import TokenMenu from "./TokenMenu";

const Dashboard = ({ account, connectWallet }) => {
  return (
    <Box
      p="15px"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      mt="20px"
      w={["300px", "500px"]}
      h="480px"
      bgColor="#211A15"
    >
      <Text fontSize="20px" lineHeight="28px" color="white" as="h3">
        Dashboard
      </Text>
      <Box
        pt="20px"
        px="25px"
        mt="45px"
        w="100%"
        bgColor="#302720"
        borderRadius="10px"
        h="100px"
      >
        <Flex justifyContent="space-between" align="center">
          <Flex align="center">
            <TokenMenu />
            <Button
              ml="30px"
              p="6px 8px"
              borderRadius="10px"
              fontSize="14px"
              lineHeight="16px"
              color="#F56736"
              w="50px"
              h="28px"
              background="rgba(245, 103, 54, 0.3)"
            >
              {" "}
              MAX
            </Button>
          </Flex>
          <Flex fontSize="20px" color="rgba(255, 255, 255, 0.6)">
            0.0
          </Flex>
        </Flex>
        <Text color="#FFFFFF99" mt="15px" fontSize="14px" fontWeight="400">
          Balance:
        </Text>
      </Box>
      <Box
        pt="15px"
        px="25px"
        mt="35px"
        w="100%"
        bgColor="#302720"
        borderRadius="10px"
        h="145px"
        color="rgba(255, 255, 255, 0.85)"
        fontSize="12px"
        lineHeight="24px"
      >
        <Text>Your Stats</Text>
        <Flex justifyContent="space-between">
          <Flex>Balance</Flex>

          <Flex>{account ? "0 palUni / $0" : "-"}</Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex>Conversion</Flex>
          <Flex>{account ? "1 palUni = 1.4 UNI" : "-"}</Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex>Your Share of the Pool</Flex>
          <Flex>{account ? "0%" : "-"}</Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Flex>Current Borrow Rate</Flex>
          <Flex>{account ? "3.4%" : "-"}</Flex>
        </Flex>
      </Box>
      <Button
        color="#FFFFFF"
        fontWeight="400"
        boxShadow="0px 2px 0px rgba(0, 0, 0, 0.016)"
        border-radius="10px"
        p="8px 16px"
        bgColor="#80381F"
        mt="35px"
        w="100%"
        h="50px"
        onClick={account ? "" : connectWallet}
      >
        {account ? "WITHDRAW" : "CONNECT TO A WALLET"}
      </Button>
    </Box>
  );
};

export default Dashboard;
