import styled from "styled-components";

const FeedContent = ({ selectedCategory, videos }) => {
  console.log(videos);
  return (
    <FeedContentContainer>
      <FeedTitle>
        <span>{selectedCategory}</span> videos
      </FeedTitle>
    </FeedContentContainer>
  );
};

export default FeedContent;

const FeedContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const FeedTitle = styled.h2`
  span {
    color: red;
  }
`;
