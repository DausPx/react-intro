import { Route, Routes } from "react-router";
import "./App.css";
import Article from "./components/Article";
import ArticleWithId from "./components/ArticlewithId";

import SearchNews from "./components/searchNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchNews />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleWithId />} />
      </Routes>
    </div>
  );
}

export default App;
