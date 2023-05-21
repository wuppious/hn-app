import StoryComments from "@/components/StoryComments";
import StoryContent from "@/components/StoryContent";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type Params = {
  id: string;
};

export default function StoryRoute() {
  const { id: idAsString } = useParams<Params>();
  const id = Number(idAsString);

  if (typeof id !== "number") {
    return null;
  }

  return (
    <Wrapper>
      <StoryContent id={id} />
      <Divider />
      <StoryComments id={id} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #585858;
`;
