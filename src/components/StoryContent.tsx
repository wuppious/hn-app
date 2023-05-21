import StyledLink from "@/components/Link";
import useItemQuery from "@/queries/useItemQuery";
import { Story } from "@/types";
import styled from "styled-components";
import { getHostname, getItemAge } from "./utils";

type StoryProps = {
  id: number;
};
export default function StoryContent({ id }: StoryProps) {
  const { data, isLoading, isError } = useItemQuery<Story>(id);

  if (isLoading) {
    return (
      <Wrapper>
        <MutedText>Loading story...</MutedText>
      </Wrapper>
    );
  }

  if (!data || isError) {
    return (
      <Wrapper>
        <MutedText>Something went wrong</MutedText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {data.url && (
        <MutedText>
          <StyledLink to={data.url ?? ""} target="_blank">
            ({getHostname(data.url)})
          </StyledLink>
        </MutedText>
      )}
      <StoryTitle>
        <StyledLink to={data.url ?? ""} target="_blank">
          {data.title}
        </StyledLink>
      </StoryTitle>

      <Details>
        <Row>
          <Score>{data.score} pts</Score>
          <MutedText>{data.descendants ?? 0} comments</MutedText>
        </Row>

        <MutedText>
          {getItemAge(data.time)} by {data.by}
        </MutedText>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  word-break: break-word;
`;

const StoryTitle = styled.h2`
  margin: 0;
  border-left: 4px solid #ff6600;
  padding-left: 1rem;
`;

const MutedText = styled.span`
  color: #bdbdbd;
  word-wrap: break-word;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Details = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

const Score = styled.span`
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
`;
