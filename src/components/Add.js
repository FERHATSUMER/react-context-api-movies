import React, { useState } from "react";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);
    fetch(`
    "https://api.themoviedb.org/3/movie/popular?api_key=your_api_key_here&language=en-US&page=1"`)
      .then((res) => res.json())
      .then((data) =>setResults(data.results));
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Hoş Geldiniz</h1>
            <h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi.Şimdi keşfedin
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Film,dizi,kişi ara..."
            />
          </div>
          {results.map((movie)=>
          <h1 key={movie.id}>{movie.title} </h1>)}
        </div>
      </div>
    </div>
  );
};

export default Add;
