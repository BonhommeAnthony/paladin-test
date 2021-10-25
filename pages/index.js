import { Button } from "@chakra-ui/button";
import { Box, Container, Flex } from "@chakra-ui/layout";
import DashContainer from "../components/Dashboard/DashContainer";
import { ethers } from "ethers";
import HeaderContainer from "../components/Header/HeaderContainer";
import { getPool, getPoolContract, getToken, getWeb3 } from "../utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [etherBalance, setEtherBalance] = useState(undefined);
  const [pool, setPool] = useState({
    totalSupply: 0,
    totalBorrowed: 0,
    activeLoan: 0,
  });

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.listAccounts();
      const token = await getToken(web3);
      if (accounts.length > 0) {
        const balance = await web3.getBalance(accounts[0]);
        const pool = await getPool(web3);
        setAccount(accounts[0]);
        setEtherBalance(balance.toString());
        setPool(pool);
      }
      setWeb3(web3);
      console.log("token", token);
    };
    init();
  }, []);

  const connectWallet = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.listAccounts();
    const pool = await getPool(web3);
    setAccount(accounts[0]);
    setPool(pool);
  };
  console.log("pool", pool);

  return (
    <Flex
      overflow="hidden"
      align="center"
      justify="center"
      h="100vh"
      background="radial-gradient(163.62% 163.62% at 50% -45.31%, #EF8171 0%, #F9DD56 99.87%);"
    >
      <HeaderContainer
        etherBalance={etherBalance}
        account={account}
        connectWallet={connectWallet}
      />
      <DashContainer account={account} pool={pool} />
    </Flex>
  );
}
