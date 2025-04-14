import "./css/App.css";
// import PaintingCard from './components/PaintingCard';
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const paintingsNumber = 1;
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

// function Text({ display }) {
//   return (
//     <div>
//       <p>{display}</p>
//     </div>
//   )
// }

export default App;
