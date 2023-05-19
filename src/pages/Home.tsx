import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";

function Home() {
  return (
    <>
      <Wrap>
        <Container>
          <Content>
            <TextWrap>
              <Title>
                Welcome to Our DAO: Empowering Community Contributions
              </Title>
              <Description>
                At Our DAO, we believe in the power of community and the
                collective wisdom it holds. We have built a vibrant and
                inclusive ecosystem where individuals from all walks of life
                come together to shape the future of our shared resources.
              </Description>
            </TextWrap>
            <ButtonWrapper>
              <div className="rounded-md shadow">
                <Link to="/future">
                  <Button>Get started</Button>
                </Link>
              </div>
            </ButtonWrapper>
          </Content>
          <Image src={Logo} />
        </Container>

        <Container2>
          <Image src={Logo} />
          <Content>
            <TextWrap>
              <Title>What is a Article Dao?</Title>
              <Description>
                ~~~
                <br />
                <br />
                ~~~
                <br />
                <br />
                ~~~
              </Description>
            </TextWrap>
          </Content>
        </Container2>

        <ProblemContainer>
          <Title> key metrics we use</Title>
          <ProblemWrap>
            <Problem>
              <ProblemTitle>Governance Token</ProblemTitle>
              <ProblemDescription>
                Our governance token is a vital element in our decision-making
                process. Holding our token grants you the right to participate
                in important votes and shape the direction of our DAO.
              </ProblemDescription>
            </Problem>

            <Problem>
              <ProblemTitle>Voter Turnout</ProblemTitle>
              <ProblemDescription>
                We track the number of participants in each vote. This helps us
                understand the level of engagement within our community and
                ensures that decisions are made with a broad representation of
                opinions.
              </ProblemDescription>
            </Problem>

            <Problem>
              <ProblemTitle>Voting Metrics</ProblemTitle>
              <ProblemDescription>
                We go beyond mere voter turnout and delve into the details. We
                analyze the level of alignment between voters and the DAO's
                positions, as well as the frequency of voting. This gives us
                valuable insights into the effectiveness of our decision-making
                processes.
              </ProblemDescription>
            </Problem>
          </ProblemWrap>
        </ProblemContainer>
        <SolutionContainer>
          <Title>Solution</Title>
          <SolutionWrap>
            <Solution>
              <SolutionTitle>Addressing Voting Bias</SolutionTitle>
              <SolutionDescription>
                To mitigate the problem of votes heavily favoring the last
                option presented, we have implemented measures to extend voting
                periods when significant changes in voting patterns occur.
                Additionally, voters who consistently align with the majority
                opinion may face penalties to encourage diversity of thought.
              </SolutionDescription>
            </Solution>
            <Solution>
              <SolutionTitle>Balancing Token Influence</SolutionTitle>
              <SolutionDescription>
                While governance tokens are an essential aspect of
                decision-making, we recognize the need to consider other factors
                as well. We employ probability-based convergence methods to
                ensure a more inclusive decision-making process that
                incorporates a broader range of perspectives.
              </SolutionDescription>
            </Solution>
            <Solution>
              <SolutionTitle>Solution</SolutionTitle>
              <SolutionDescription>solution3</SolutionDescription>
            </Solution>
          </SolutionWrap>
        </SolutionContainer>
        <FAQContainer>
          <Title>FAQ</Title>
          <FAQWrap>
            <FAQ>
              <FAQTitle>FAQ</FAQTitle>
              <FAQDescription>
                The value of paired tokens in existing DeFi platforms is subject
                to volatility, which can lead to diminishing position values.
              </FAQDescription>
            </FAQ>
            <FAQ>
              <FAQTitle>FAQ</FAQTitle>
              <FAQDescription>
                The value of paired tokens in existing DeFi platforms is subject
                to volatility, which can lead to diminishing position values.
              </FAQDescription>
            </FAQ>
            <FAQ>
              <FAQTitle>FAQ</FAQTitle>
              <FAQDescription>
                The value of paired tokens in existing DeFi platforms is subject
                to volatility, which can lead to diminishing position values.
              </FAQDescription>
            </FAQ>
          </FAQWrap>
        </FAQContainer>
        <TeamContainer>
          <Title>Team</Title>
          <TeamWrap>
            <Team>
              <TeamTitle>JIHO</TeamTitle>
              <TeamDescription>frontend developer</TeamDescription>
            </Team>
            <Team>
              <TeamTitle>JIHO</TeamTitle>
              <TeamDescription>frontend developer</TeamDescription>
            </Team>
            <Team>
              <TeamTitle>JIHO</TeamTitle>
              <TeamDescription>frontend developer</TeamDescription>
            </Team>
          </TeamWrap>
        </TeamContainer>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #1f2937;
  text-shadow: 1px 1px 2px #e5e7eb;
  font-size: 3xl;

  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-top: 0.75rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ProblemWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ProblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Problem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
  width: 300px;
  height: 400px;
`;
const ProblemTitle = styled.h1`
  color: #1f2937;
  text-shadow: 1px 1px 2px #e5e7eb;
  font-size: 2xl;
  text-align: center;

  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;
const ProblemDescription = styled.p`
  color: #6b7280;
  text-align: center;
  font-size: 1.125rem;
  margin-top: 0.75rem;
`;

const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
const SolutionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Solution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;
const SolutionTitle = styled.h1`
  color: #1f2937;
  text-shadow: 1px 1px 2px #e5e7eb;
  font-size: 2xl;

  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;
const SolutionDescription = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-top: 0.75rem;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
const FAQWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;
const FAQTitle = styled.h1`
  color: #1f2937;
  text-shadow: 1px 1px 2px #e5e7eb;
  font-size: 2xl;

  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;
const FAQDescription = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-top: 0.75rem;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  width: 100vw;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;
const TeamWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 2px 4px rgb(0 0 0 / 4%),
    0 8px 24px rgb(0 0 0 / 8%);
`;
const TeamTitle = styled.h1`
  color: #1f2937;
  text-shadow: 1px 1px 2px #e5e7eb;
  font-size: 2xl;

  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0.75rem;
`;
const TeamDescription = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-top: 0.75rem;
`;

export default Home;
