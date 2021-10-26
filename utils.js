import { ethers } from "ethers";

const uniPoolAddress = "0xb1265a6b2c5d43ff358a847df64fd825b7ed70e0";

const poolAbi = [
  "function _underlyingBalance() public view returns(uint)",
  "function underlyingBalanceOf(address _account) external view returns(uint)",
  "function totalBorrowed() public view returns(uint)",
  "function minBorrowLength() public view returns(uint)",
  "function getLoansPools() external view returns(address [] memory)",
  "function balanceOf(address _account) external view returns(uint)",
  "function borrowRatePerBlock() external view returns (uint)",
];

const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new ethers.providers.Web3Provider(window.ethereum);
        try {
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        resolve(window.web3);
      } else {
        reject("Must install Metamask");
      }
    });
  });
};

const getData = async (provider, account) => {
  const uniPoolContract = new ethers.Contract(
    uniPoolAddress,
    poolAbi,
    provider
  );
  const balance = await provider.getBalance(account);
  const uniBalanceRaw = await uniPoolContract.underlyingBalanceOf(account);
  const totalSupplyRaw = await uniPoolContract._underlyingBalance();
  const totalBorrowedRaw = await uniPoolContract.totalBorrowed();
  const minBorrowLengthRaw = await uniPoolContract.minBorrowLength();
  const totalLoanRaw = await uniPoolContract.getLoansPools();
  const borrowRatePerBlockRaw = await uniPoolContract.borrowRatePerBlock();
  const palUNIBalanceRaw = await uniPoolContract.balanceOf(account);
  const totalSupply = ethers.utils.formatEther(totalSupplyRaw.toString());
  const uniBalance = ethers.utils.formatEther(uniBalanceRaw.toString());
  const palUNIBalance = ethers.utils.formatEther(palUNIBalanceRaw.toString());
  const totalBorrowed = ethers.utils.formatEther(totalBorrowedRaw.toString());
  const minBorrowLength = Math.trunc(
    (minBorrowLengthRaw.toString() * 15) / 86400
  );
  const borrowRate = (borrowRatePerBlockRaw.toString() / 100000000000).toFixed(
    1
  );

  return {
    totalSupply,
    totalBorrowed,
    totalLoanRaw,
    minBorrowLength,
    borrowRate,
    palUNIBalance,
    uniBalance,
    balance,
  };
};

export { getWeb3, uniPoolAddress, poolAbi, getData };
