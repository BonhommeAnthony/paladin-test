import { Flex } from "@chakra-ui/layout";
import DashContainer from "../components/Dashboard/DashContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import { getData, getWeb3 } from "../utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState(undefined);
  const [provider, setProvider] = useState(undefined);
  const [etherBalance, setEtherBalance] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState({
    totalUniSupply: 0,
    totalUniBorrowed: 0,
    activeLoan: 0,
    minBorrowLength: 0,
    borrowRate: 0,
    palUNIBalance: 0,
    uniBalance: 0,
    palUNItotalSupply: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const connectWallet = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await provider.listAccounts();
    setisLoading(true);
    setAccount(accounts[0]);
    const {
      totalUniSupply,
      totalUniBorrowed,
      activeLoan,
      minBorrowLength,
      borrowRate,
      palUNIBalance,
      userUniBalance,
      palUNItotalSupply,
      etherBalance,
    } = await getData(provider, accounts[0]);
    setData({
      totalUniSupply,
      totalUniBorrowed,
      activeLoan,
      minBorrowLength,
      borrowRate,
      palUNIBalance,
      userUniBalance,
      palUNItotalSupply,
    });
    setEtherBalance(etherBalance.toString());
    setisLoading(false);
  };

  const loadData = async () => {
    const provider = await getWeb3();
    const accounts = await provider.listAccounts();
    setProvider(provider);
    setAccount(accounts[0]);

    if (accounts.length > 0) {
      setisLoading(true);
      const {
        totalUniSupply,
        totalUniBorrowed,
        activeLoan,
        minBorrowLength,
        borrowRate,
        palUNIBalance,
        userUniBalance,
        palUNItotalSupply,
        etherBalance,
      } = await getData(provider, accounts[0]);
      setData({
        totalUniSupply,
        totalUniBorrowed,
        activeLoan,
        minBorrowLength,
        borrowRate,
        palUNIBalance,
        userUniBalance,
        palUNItotalSupply,
      });
      setEtherBalance(etherBalance.toString());
      setisLoading(false);
    }
  };

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
      <DashContainer
        isLoading={isLoading}
        connectWallet={connectWallet}
        account={account}
        data={data}
      />
    </Flex>
  );
}
