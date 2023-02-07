import styled from "styled-components";
import { useEffect, useState } from "react";

import { Sidebar, FeedContent } from "./";
import { fetchFromAPI } from "../assets/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <FeedContainer>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FeedContent selectedCategory={selectedCategory} videos={videos} />
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    height: 95%;
  }
`;
