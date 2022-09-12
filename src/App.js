import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchinfo, setSearchInfo] = useState({});

  const handleSearch = async e => {
    e.preventDefault();
    if (search === " ") return;
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
    const response = await fetch(endpoint);

    console.log(response);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();

    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wiki Seeker</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input type="search" placeholder="What are you looking for?" value={search} onChange={e => setSearch(e.target.value)}/>
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
