import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import VoteChart from "../components/common/VoteChart";
import { useSigner } from "../states/wallet.state";
import ArticleDaoABI from "../abi/Article_DAO.json";
import { Article_DAO } from "../../types";

import { BigNumber, ethers } from "ethers";
import { useConnectWallet } from "@web3-onboard/react";

// Define the interface for the customer data

interface RecruitBoxProps {
  recruit: Recruit;
}
interface Recruit {
  id: number;
  name: string;
  minCount: number;
  count: number;
  deadline: string;
}
interface Customer {
  id: number;
  name: string;
  postCount: number; // 쓴 글의 개수
  contribution: number; // 기여도
  tokenCount: number; // 가지고 있는 토큰의 개수
  twitter: string;
}

const PercentageBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const PercentageFilled = styled.div<{ percent: number }>`
  height: 100%;
  background-color: #007bff;
  border-radius: 10px;
  width: ${(props) => props.percent}%;
`;
interface PercentageBarProps {
  totalCount: number;
  participantCount: number;
}
const PercentageBar: React.FC<PercentageBarProps> = ({
  totalCount,
  participantCount,
}) => {
  const percent = Math.floor((participantCount / totalCount) * 100);

  return (
    <PercentageBarWrapper>
      <PercentageFilled
        percent={participantCount >= totalCount ? 100 : percent}
      />
      <div>{percent}%</div>
    </PercentageBarWrapper>
  );
};

const RecruitBox: React.FC<RecruitBoxProps> = ({ recruit }) => {
  return (
    <CustomerItem>
      <strong>Name:</strong> {recruit.name}
      <br />
      <strong>Dead Line:</strong> {recruit.deadline}
      <br />
      <strong>Participant:</strong> {recruit.count} / {recruit.minCount}
      <br />
      <PercentageBar
        totalCount={recruit.minCount}
        participantCount={recruit.count}
      />
    </CustomerItem>
  );
};

const recruits: Recruit[] = [
  {
    id: 1,
    name: "John Doe",
    minCount: 10,
    count: 5,
    deadline: "2021-10-10",
  },
];

interface PendingBoxProps {
  pending: Pending;
}
interface Pending {
  id: number;
  name: string;
  deadline: string;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
}
const PendingBox: React.FC<PendingBoxProps> = ({ pending }) => {
  return (
    <CustomerItem>
      <strong>Name:</strong> {pending.name}
      <br />
      <strong>Dead Line:</strong> {pending.deadline}
      <br />
      <strong>Votes:</strong>
      {pending.votesFor} / {pending.totalVotes}
      <br />
      <VoteChart
        votesFor={pending.votesFor}
        votesAgainst={pending.votesAgainst}
        totalVotes={pending.totalVotes}
      />
    </CustomerItem>
  );
};

const pendings: Pending[] = [
  {
    id: 2,
    name: "John Doe",
    deadline: "2021-10-10",
    votesFor: 3,
    votesAgainst: 2,
    totalVotes: 5,
  },
];

let provider;

const Whitelist = () => {
  const [{ wallet }, connect, disconnect, updateBalance, setWalletModules] =
    useConnectWallet();

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null;
    } else {
      provider = new ethers.providers.Web3Provider(wallet.provider, "any");
    }
  }, [wallet?.provider]);

  const registerWhiteList = async () => {
    if (!wallet?.provider) {
      alert("Connect Wallet");
      return;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const provider = new ethers.providers.Web3Provider(wallet.provider, "any");
    const signer = provider.getUncheckedSigner();

    const contract: Article_DAO = new ethers.Contract(
      "0x28504b5182FF1944894A0dc684ca139733201783",
      ArticleDaoABI,
      signer
    ) as Article_DAO;
    const tx = await contract.writerRegister(BigNumber.from(100));
    tx.wait();

    alert("Success");
  };

  const customers: Customer[] = [
    {
      id: 1,
      name: "John Doe",
      postCount: 10,
      contribution: 100,
      tokenCount: 1000,
      twitter: "https://twitter.com/JohnDoe",
    },
    {
      id: 2,
      name: "Jane Doe",
      postCount: 20,
      contribution: 200,
      tokenCount: 2000,
      twitter: "https://twitter.com/JaneDoe",
    },
    {
      id: 3,
      name: "John Smith",
      postCount: 30,
      contribution: 300,
      tokenCount: 3000,
      twitter: "https://twitter.com/JohnSmith",
    },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  return (
    <Container>
      <TitleWrap>
        <Title>Whitelist</Title>

        <StyledButton onClick={registerWhiteList}> 작가 등록</StyledButton>
      </TitleWrap>
      <ListWrap>
        <RecruitWrap>
          <h2>Recruit</h2>
          <CustomerList>
            {recruits.map((recruit) => (
              <>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`recruit/${recruit.id}`}
                >
                  <RecruitBox key={recruit.id} recruit={recruit} />
                </Link>
              </>
            ))}
          </CustomerList>
        </RecruitWrap>
        <PendingWrap>
          <h2>Pending</h2>
          <CustomerList>
            {pendings.map((pending) => (
              <>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`pending/${pending.id}`}
                >
                  <PendingBox key={pending.id} pending={pending} />
                </Link>
              </>
            ))}
          </CustomerList>
        </PendingWrap>
        <WhitelistWrap>
          <h2>Whitelist</h2>
          <CustomerList>
            {customers.map((customer) => (
              <>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`/whitelist/${customer.id}`}
                >
                  <CustomerItem key={customer.id}>
                    <strong>Name:</strong> {customer.name}
                    <br />
                    <strong>Posts:</strong> {customer.postCount}
                    <br />
                    <strong>Contribution:</strong> {customer.contribution}
                    <br />
                    <strong>Tokens:</strong> {customer.tokenCount}
                    <br />
                    <strong>Twitter:</strong>
                    {customer.twitter}
                  </CustomerItem>
                </Link>
              </>
            ))}
          </CustomerList>
        </WhitelistWrap>
      </ListWrap>
    </Container>
  );
};

export default Whitelist;

// Styled component for the Whitelist page
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const RecruitWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PendingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhitelistWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomerList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const CustomerItem = styled.li`
  width: 400px;
  height: 120px;
  padding: 10px;
  border: 1px solid #ccc;

  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
      0 8px 24px rgb(0 0 0 / 8%);
  }
`;

const ModalDiv = styled.div`
  &:hover {
    cursor: pointer;
    color: red;
  }
`;
const ModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: transparent;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

const TitleWrap = styled.div`
  display: flex;

  align-items: center;
`;
