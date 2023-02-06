import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </AppContainer>
  </BrowserRouter>
);

export default App;

const AppContainer = styled.div`
  background-color: #000;
`;
