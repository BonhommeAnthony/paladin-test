import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";

const HeaderButton = ({ connectWallet }) => {
  return (
    <Flex>
      <Button
        onClick={connectWallet}
        p="8px 16px"
        bg="#211a15"
        color="white"
        boxShadow="0px 2px 0px rgba(0, 0, 0, 0.016)"
        borderRadius="10px"
        fontWeight="700"
        size="16px"
        lineHeight="24px"
        w={["auto", "207px"]}
        h="40px"
      >
        Connect Wallet
      </Button>
    </Flex>
  );
};

export default HeaderButton;
