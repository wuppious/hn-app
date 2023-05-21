import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import StoryContent from "../StoryContent";

type Props = {
  id: number;
};

const StoryListItem = forwardRef<HTMLLIElement, Props>(function StoryListItem(
  { id },
  ref
) {
  const navigate = useNavigate();

  return (
    <Wrapper ref={ref} onClick={() => navigate(`/${id}`)}>
      <StoryContent id={id} />
    </Wrapper>
  );
});

export default StoryListItem;

const Wrapper = styled.li`
  cursor: pointer;
  border: 2px solid;
  border-color: #585858;
  border-radius: 8px;
  padding: 16px 24px;

  transition: box-shadow, border-color, transform;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus-visible {
    border-color: #ff6600;
    box-shadow: inset 0px 0px 8px #ff6600, 0px 0px 8px #ff6600;
    transform: translateY(-8px);
  }
`;
