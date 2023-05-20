import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import DaoBox from "../components/profile/DaoBox";
import { useConnectWallet } from "../states/wallet.state";
import backgroundwhite2 from "../assets/backgroundwhitelist2.jpg";

interface DaoComponentProps {
  name: string;
  votes: number;
  quorum: number;
  delegatedVotes: string;
}

const daos: DaoComponentProps[] = [
  {
    name: "dao1",
    votes: 3,
    quorum: 5,
    delegatedVotes: "Votes",
  },
  {
    name: "dao2",
    votes: 5,
    quorum: 8,
    delegatedVotes: "dVotes",
  },
];

function Profile() {
  const { account, chainId, connect, disconnect } = useConnectWallet();
  return (
    <Container>
      <Wrap>
        <ProfileWrap>
          <h1>Profile</h1>
          <ProfileImg src={Logo} alt="" />
          <p>name</p>
          <p>{account}</p>
        </ProfileWrap>

        <RecordWrap>
          <h1>Contribution record</h1>

          <TableWrap>
            <Header>
              <Title>Title</Title>
              <Title>State</Title>
              <Title>Deadline</Title>
              <Title>Votes</Title>
            </Header>
            {daos.map((dao, index) => (
              <DaoBox key={index} dao={dao} />
            ))}
          </TableWrap>
        </RecordWrap>
      </Wrap>
    </Container>
  );
}

export default Profile;
const Container = styled.div`
  padding: 20px;
  background-image: url(${backgroundwhite2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100vw;
  height: 100vh;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const RecordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TableWrap = styled.div``;

const Header = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr 2fr 5fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
