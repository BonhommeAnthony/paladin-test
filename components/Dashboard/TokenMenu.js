import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

const TokenMenu = () => {
  return (
    <Menu w="20px" placement="right">
      {({ isOpen }) => (
        <>
          <MenuButton transition="all 0.2s" color="white">
            <Flex
              color="#FFFFFF"
              fontWeight="500"
              fontSize="16px"
              align="center"
            >
              <Flex align="center">
                <Image
                  bgColor="white"
                  boxSize="20px"
                  borderRadius="full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png"
                  alt="Simon the pensive"
                  mr="12px"
                />{" "}
                UNI
                {isOpen ? (
                  <ChevronRightIcon ml="10px" />
                ) : (
                  <ChevronDownIcon ml="10px" />
                )}
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList color="#FFFFFF80" bgColor="#302720" borderColor="#D9D9D980">
            <MenuItem _hover={{ color: "white", bgColor: "#302720" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://actufinance.fr/wp-content/uploads/2021/04/aave-aave-logo.png"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>AAVE</span>
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "#302720" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://actufinance.fr/wp-content/uploads/2021/04/aave-aave-logo.png"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>stkAAVE</span>
            </MenuItem>
            <MenuItem _hover={{ color: "white", bgColor: "#302720" }}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>COMP</span>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default TokenMenu;
