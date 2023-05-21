import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import StoryListItem from "./StoryListItem";
import { useTopStories } from "./useTopStories";

export default function StoryList() {
  const { ids, isLoading, isStoriesLoading, nextPage, error } = useTopStories();
  const { ref: infiniteLoaderRef, inView } = useInView();

  /**
   * Allow infinite loader to load only a single page at a time
   */
  useEffect(() => {
    if (inView && !isStoriesLoading) {
      nextPage();
    }
  }, [inView, isStoriesLoading, nextPage]);

  if (isLoading) return <p>Loading stories...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <Wrapper>
      {ids.map((id, index) => {
        return (
          <StoryListItem
            key={id}
            id={id}
            ref={index === ids.length - 1 ? infiniteLoaderRef : undefined}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: grid;
  gap: 32px;
  width: 100%;
  list-style-type: none;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 480px), 1fr));
  align-items: center;
`;
