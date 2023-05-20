import { useConnectWallet } from "@web3-onboard/react";
import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Article_DAO } from "../../../types";
import ArticleDaoABI from "../../abi/Article_DAO.json";
import type { TokenSymbol } from "@web3-onboard/common";

interface Proposal {
  id: number;
  title: string;
  description: string;
  reward: number;
}
let provider;

interface Account {
  address: string;
  balance: Record<TokenSymbol, string> | null;
  ens: { name: string | undefined; avatar: string | undefined };
}

function WhiteUserRegister() {
  const [proposals, setProposals] = useState<Proposal>({
    id: 0,
    title: "",
    description: "",
    reward: 0,
  });
  const [{ wallet }, connect, disconnect, updateBalance, setWalletModules] =
    useConnectWallet();

  const [account, setAccount] = useState<Account | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null;
    } else {
      const { name, avatar } = wallet?.accounts[0].ens ?? {};
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
        ens: { name, avatar: avatar?.url },
      });
      provider = new ethers.providers.Web3Provider(wallet.provider, "any");
      setSigner(provider.getUncheckedSigner());
    }
  }, [wallet?.provider]);

  const registerWhiteList = async () => {
    if (!wallet?.provider || !account || !signer) {
      alert("Connect Wallet");
      return;
    }

    const contract: Article_DAO = new ethers.Contract(
      "0xa334b3B9eBcbdac00bEC120fB17d25367018662e",
      ArticleDaoABI,
      signer
    ) as Article_DAO;
    const tx = await contract?.approve(
      "0xa334b3B9eBcbdac00bEC120fB17d25367018662e",
      BigNumber.from("1")
    );
    await tx.wait();

    const writerRegistertx = await contract?.writerRegister(
      BigNumber.from("1")
    );
    await writerRegistertx.wait();

    // const tx = await contract?.writerRegister(BigNumber.from("1"));

    alert("Success");
  };
  return (
    <Wrap>
      <h1>작가 등록</h1>
      <Description>token submit에 대한 주의사항 및 설명</Description>

      <InputWrap>
        <div>안건 제목: </div>
        <input
          type="text"
          value={proposals?.title}
          onChange={(e) =>
            setProposals({ ...proposals, title: e.target.value })
          }
        />
      </InputWrap>
      <InputWrap>
        <div>안건 설명: </div>
        <input
          type="text"
          value={proposals?.description}
          onChange={(e) =>
            setProposals({ ...proposals, description: e.target.value })
          }
        />
      </InputWrap>

      <InputWrap>
        <div>Reward로 제공할 staking </div>
        <input
          type="number"
          value={proposals?.reward}
          onChange={(e) =>
            setProposals({ ...proposals, reward: Number(e.target.value) })
          }
        />
      </InputWrap>
      <div>Used Token : {proposals.reward}</div>
      <Button onClick={registerWhiteList}>Submit</Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 600px;
  height: 550px;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;
const Description = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;
  width: 500px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #eee;
`;
const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 500px;
  height: 50px;
  input {
    width: 300px;
    height: 30px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  margin-top: 10px;
`;

export default WhiteUserRegister;
