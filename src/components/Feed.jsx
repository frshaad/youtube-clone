import styled from "styled-components";

import { categories } from "../assets/constants.jsx";

const Feed = () => (
  <FeedContainer>
    <Sidebar>
      {categories &&
        categories.map((category, index) => (
          <CategoryItem>
            <CategoryIcon>{category.icon}</CategoryIcon>
            <CategoryName>{category.name}</CategoryName>
          </CategoryItem>
        ))}
    </Sidebar>

    <FeedContent></FeedContent>
  </FeedContainer>
);

export default Feed;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media (min-width: 640px) {
    flex-direction: row;
    height: 92vh;
  }
`;

const FeedContent = styled.div``;

const Sidebar = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  background-color: #333;
  padding: 15px 15px;
  margin-left: 20px;
  min-width: 180px;
  color: #fff;
  border-radius: 20px;
  gap: 10px;

  @media (min-width: 640px) {
    flex-direction: column;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 15px;
  cursor: pointer;
  border-radius: 15px;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: red;
  }
`;

const CategoryIcon = styled.span`
  display: flex;
  margin-right: 15px;
  font-size: 20px;
`;

const CategoryName = styled.span``;
