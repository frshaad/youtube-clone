import styled from "styled-components";

import { categories } from "../assets/constants.jsx";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <SidebarContainer>
      {categories &&
        categories.map(category => (
          <CategoryItem
            onClick={() => setSelectedCategory(category.name)}
            key={category.name}
            style={{
              backgroundColor: category.name === selectedCategory ? "red" : "",
            }}
          >
            <CategoryIcon
              style={{
                color: category.name === selectedCategory ? "white" : "red",
              }}
            >
              {category.icon}
            </CategoryIcon>
            <CategoryName
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.9",
              }}
            >
              {category.name}
            </CategoryName>
          </CategoryItem>
        ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 15px 15px;
  margin-left: 20px;
  min-width: 180px;
  gap: 10px;
  background-color: #333;
  color: #fff;
  border-radius: 20px;
  overflow-y: auto;

  @media (min-width: 640px) {
    flex-direction: column;
    height: 95%;
  }
`;

const CategoryIcon = styled.span`
  display: flex;
  margin-right: 15px;
  font-size: 20px;
  color: red;
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
    ${CategoryIcon} {
      color: white;
    }
  }
`;

const CategoryName = styled.span``;
