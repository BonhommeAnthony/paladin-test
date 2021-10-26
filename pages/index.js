import { Flex } from "@chakra-ui/layout";
import DashContainer from "../components/Dashboard/DashContainer";
import HeaderContainer from "../components/Header/HeaderContainer";
import { getPool, getWeb3, poolAbi, uniPoolAddress } from "../utils";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Logo from "../components/Header/Logo";

export default function Home() {
  const [account, setAccount] = useState(undefined);
  const [provider, setProvider] = useState(undefined);
  const [etherBalance, setEtherBalance] = useState(undefined);
  const [data, setData] = useState({});

  useEffect(() => {
    // const init = async () => {
    //   const web3 = await getWeb3();
    //   const accounts = await web3.listAccounts();
    //   if (accounts.length > 0) {
    //     const balance = await web3.getBalance(accounts[0]);

    //     const data = await getPool(web3, accounts[0]);
    //     setAccount(accounts[0]);
    //     setEtherBalance(balance.toString());
    //     setPool(data);
    //   }
    //   setWeb3(web3);
    // };
    // init();
    loadData();
  }, []);

  const connectWallet = async () => {
    await ethereum.request({ method: "eth_requestAccounts" });
    loadData();
  };

  const loadData = async () => {
    const provider = await getWeb3();
    const uniPoolContract = new ethers.Contract(
      uniPoolAddress,
      poolAbi,
      provider
    );
    const accounts = await provider.listAccounts();

    if (accounts.length > 0) {
      const balance = await provider.getBalance(accounts[0]);
      const uniBalanceRaw = await uniPoolContract.underlyingBalanceOf(
        accounts[0]
      );
      const totalSupplyRaw = await uniPoolContract._underlyingBalance();
      const totalBorrowedRaw = await uniPoolContract.totalBorrowed();
      const minBorrowLengthRaw = await uniPoolContract.minBorrowLength();
      const totalLoanRaw = await uniPoolContract.getLoansPools();
      const borrowRatePerBlockRaw = await uniPoolContract.borrowRatePerBlock();
      const palUNIBalanceRaw = await uniPoolContract.balanceOf(accounts[0]);
      const totalSupply = ethers.utils.formatEther(totalSupplyRaw.toString());
      const uniBalance = ethers.utils.formatEther(uniBalanceRaw.toString());
      const palUNIBalance = ethers.utils.formatEther(
        palUNIBalanceRaw.toString()
      );
      const totalBorrowed = ethers.utils.formatEther(
        totalBorrowedRaw.toString()
      );
      const minBorrowLength = Math.trunc(
        (minBorrowLengthRaw.toString() * 15) / 86400
      );
      const borrowRate = (
        borrowRatePerBlockRaw.toString() / 100000000000
      ).toFixed(1);

      setEtherBalance(balance.toString());
      setData({
        totalSupply,
        totalBorrowed,
        totalLoanRaw,
        minBorrowLength,
        borrowRate,
        palUNIBalance,
        uniBalance,
      });
    }
    setProvider(provider);
    setAccount(accounts[0]);
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
        connectWallet={connectWallet}
        account={account}
        data={data}
      />
    </Flex>
  );
}
