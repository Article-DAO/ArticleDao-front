import React from "react";
import styled from "styled-components";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";

// Define the interface for the customer data
interface Customer {
  id: number;
  name: string;
  postCount: number; // 쓴 글의 개수
  contribution: number; // 기여도
  tokenCount: number; // 가지고 있는 토큰의 개수
  twitter: string;
}

const Whitelist = () => {
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
        <StyledButton> 작가 등록</StyledButton>
      </TitleWrap>
      <ListWrap>
        <RecruitWrap>
          <h2>Recruit</h2>
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
        </RecruitWrap>
        <PendingWrap>
          <h2>Pending</h2>
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
  justify-content: center;
`;

const PendingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WhitelistWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomerList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const CustomerItem = styled.li`
  width: 400px;
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
