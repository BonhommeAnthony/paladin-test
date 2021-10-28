import { ethers } from "ethers";

const uniPoolAddress = "0xb1265a6b2c5d43ff358a847df64fd825b7ed70e0";
const tokenAddress = "0x961692fb4Ca983A116a6432E2b82972094c71cf2";

const poolAbi = [
  "function _underlyingBalance() public view returns(uint)",
  "function underlyingBalanceOf(address _account) external view returns(uint)",
  "function totalBorrowed() public view returns(uint)",
  "function minBorrowLength() public view returns(uint)",
  "function getLoansPools() external view returns(address [] memory)",
  "function balanceOf(address _account) external view returns(uint)",
  "function borrowRatePerBlock() external view returns (uint)",
  "function getBorrowData(address _loanAddress) external view returns (address _borrower, address _loan, uint _amount, address _underlying, uint _feesAmount, uint _feesUsed, uint _startBlock, bool _closed)",
];

const tokenAbi = [
  "function totalSupply() external override view returns (uint256)",
  "function balanceOf(address _account) external view returns(uint)",
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
  //palUNI contract data
  const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
  const palUNItotalSupplyRaw = await tokenContract.totalSupply();
  const palUNItotalSupply = ethers.utils.formatEther(
    palUNItotalSupplyRaw.toString()
  );

  //Pool contract contract data
  const uniPoolContract = new ethers.Contract(
    uniPoolAddress,
    poolAbi,
    provider
  );
  const etherBalance = await provider.getBalance(account);
  const userUniBalanceRaw = await uniPoolContract.underlyingBalanceOf(account);
  const totalUniSupplyRaw = await uniPoolContract._underlyingBalance();
  const totalUniBorrowedRaw = await uniPoolContract.totalBorrowed();
  const minBorrowLengthRaw = await uniPoolContract.minBorrowLength();
  const totalLoanRaw = await uniPoolContract.getLoansPools();
  const borrowRatePerBlockRaw = await uniPoolContract.borrowRatePerBlock();
  const palUNIBalanceRaw = await uniPoolContract.balanceOf(account);
  const totalUniSupply = ethers.utils.formatEther(totalUniSupplyRaw.toString());
  const userUniBalance = ethers.utils.formatEther(userUniBalanceRaw.toString());
  const palUNIBalance = ethers.utils.formatEther(palUNIBalanceRaw.toString());
  const totalUniBorrowed = ethers.utils.formatEther(
    totalUniBorrowedRaw.toString()
  );
  const minBorrowLength = Math.trunc(
    (minBorrowLengthRaw.toString() * 15) / 86400
  );
  const borrowRate = (borrowRatePerBlockRaw.toString() / 100000000000).toFixed(
    1
  );
  const totalLoan = await Promise.all(
    totalLoanRaw.map(async (loan) => {
      const data = await uniPoolContract.getBorrowData(loan);
      return data._closed;
    })
  );
  const activeLoan = totalLoan.filter((e) => e === false);

  return {
    totalUniSupply,
    totalUniBorrowed,
    activeLoan,
    minBorrowLength,
    borrowRate,
    palUNIBalance,
    userUniBalance,
    palUNItotalSupply,
    etherBalance,
  };
};

export { getWeb3, uniPoolAddress, poolAbi, getData };
