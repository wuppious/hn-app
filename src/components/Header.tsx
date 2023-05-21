import styled from "styled-components";
import ycLogo from "/y18.svg";

export default function Header() {
  return (
    <Wrapper>
      <img src={ycLogo} />
      <h1>Hacker News App</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  img {
    box-shadow: 0px 0px 16px ${({ theme }) => theme.colors.primary};
  }
`;
