import './App.css'
// import PaintingCard from './components/PaintingCard';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  const paintingsNumber = 1;
  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/paintings/:id" element={<PaintingCard />} /> */}
      </Routes>
    </main>
    // <>
    // <Home />
    //   {/* <PaintingCard painting={{title: "Painting 1", release_date: "1994"}} /> */}
    // </>
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
