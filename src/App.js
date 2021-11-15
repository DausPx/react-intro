import { Route, Routes } from "react-router";
import "./App.css";

import SearchNews from "./components/searchNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchNews />} />
        <Route path="/search/:articleID" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
