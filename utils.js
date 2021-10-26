import { ethers } from "ethers";

const uniPoolAddress = "0xb1265a6b2c5d43ff358a847df64fd825b7ed70e0";

const poolAbi = [
  "function _underlyingBalance() public view returns(uint)",
  "function underlyingBalanceOf(address _account) external view returns(uint)",
  "function totalBorrowed() public view returns(uint)",
  "function minBorrowLength() public view returns(uint)",
  "function getLoansPools() external view returns(address [] memory)",
  "function balanceOf(address _account) external view returns(uint)",
  "function getBorrowData(address _loanAddress) external view returns (address _borrower, address _loan, uint _amount, address _underlying, uint _feesAmount, uint _feesUsed, uint _startBlock, bool _closed)",
  "function totalReserve() public view returns(uint)",
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

export { getWeb3, uniPoolAddress, poolAbi };
