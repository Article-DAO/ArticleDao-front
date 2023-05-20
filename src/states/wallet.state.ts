import { useNavigate } from "react-router-dom";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { CHAINID } from "../interfaces/config-data.interface";
import { ethers, providers, Signer } from "ethers";

import { connectMetamask } from "./../utils/metamask";

export const accountAtom = atom<string | null>({
  key: "atom/account",
  default: null,
});
export const chainIdAtom = atom<number>({
  key: "atom/chainId",
  // TODO: CHANGE DEFAULT CHAIN ID
  default: CHAINID.Linea,
});

export const useWallet = () => {
  const account = useRecoilValue(accountAtom);
  const chainId = useRecoilValue(chainIdAtom);
  return {
    account,
    chainId,
  };
};

export const useConnectWallet = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const [chainId, setChainId] = useRecoilState(chainIdAtom);
  const resetChainId = useResetRecoilState(chainIdAtom);
  const nav = useNavigate();

  const connect = async () => {
    const res = await connectMetamask(chainId);
    if (!res || !res.ok) return nav("/");

    setAccount(res!.account);
    setChainId(res!.chainId);
  };

  const disconnect = async () => {
    setAccount(null);
    resetChainId();
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.ethereum?.on("accountsChanged", (accounts: string[]) => {
    setAccount(accounts[0] ?? null);
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.ethereum?.on("chainChanged", (chainId: string) => {
    setChainId(+chainId);
    nav("/");
  });

  return {
    account,
    chainId,
    connect,
    disconnect,
  };
};

// export const useSigner = async () => {
//   const account = useRecoilValue(accountAtom);
//   const getSignerfromProvider = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     await provider.send("eth_requestAccounts", []);

//     const signer = provider.getSigner();

//     return signer;
//   };
//   const signer = await getSignerfromProvider();
//   return {
//     signer:
//       account && window.ethereum
//         ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//           signer
//         : null,
//     account,
//   };
// };
