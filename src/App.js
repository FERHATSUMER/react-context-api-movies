import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />}/>
          <Route path="/watched" element={<Watched />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
