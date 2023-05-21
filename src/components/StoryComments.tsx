import styled from "styled-components";
import Link from "./Link";

type Props = {
  id: number;
};
export default function StoryComments({ id }: Props) {
  return (
    <Comments>
      <p>
        View comments, upvote and more at{" "}
        <UnderlineLink
          to={`https://news.ycombinator.com/item?id=${id}`}
          target="_blank"
        >
          news.ycombinator.com
        </UnderlineLink>
      </p>
    </Comments>
  );
}

const Comments = styled.div`
  width: 100%;
  text-align: center;
  > p {
    margin: 0;
  }
`;

const UnderlineLink = styled(Link)`
  text-decoration: underline;
`;
