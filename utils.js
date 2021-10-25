import { ethers } from "ethers";
import ABI from "./abi.json";

const uniPoolList = "0xb1265a6b2c5d43ff358a847df64fd825b7ed70e0";

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

const getPool = async (web3) => {
  const poolContract = new ethers.Contract(uniPoolList, ABI, web3);

  const totalSupplyRaw = await poolContract._underlyingBalance();
  const totalBorrowedRaw = await poolContract.totalBorrowed();
  const totalLoanRaw = await poolContract.getLoansPools();

  const totalSupply = ethers.utils.formatEther(totalSupplyRaw.toString());
  const totalBorrowed = ethers.utils.formatEther(totalBorrowedRaw.toString());
  const totalLoan = totalLoanRaw.length;

  return { totalSupply, totalBorrowed, totalLoan };
};

export { getWeb3, getPool };
