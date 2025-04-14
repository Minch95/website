import { useState } from "react";
import PaintingCard from "../components/PaintingCard";
import "../css/Home.css";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const paintings = [
    { id: 1, title: "Starry Night", date: "2011" },
    { id: 2, title: "Painting 2", date: "2012" },
    { id: 3, title: "Painting 3", date: "2013" },
    { id: 4, title: "Painting 4", date: "2014" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };
  return (
    <div className="home">
      <h1>Welcome to the Art Gallery</h1>
      <div className="paintings-list">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for a painting..."
            className="search-input"
            value = {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {paintings.map((painting) => (
            painting.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
                <PaintingCard key={painting.id} painting={painting} />
            )
        ))}
      </div>
    </div>
  );
}

export default Home;
