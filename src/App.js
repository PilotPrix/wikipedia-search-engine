import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchinfo, setSearchInfo] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wiki Seeker</h1>
        <form className="search-box">
          <input type="search" placeholder="What are you looking for?" />
        </form>
        <p>Search Results: 0</p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Title Goes header</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, reiciendis.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default App;
