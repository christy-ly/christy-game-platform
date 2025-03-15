import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
import TicTacToe from "./games/TicTacToe/TicTacToe";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/games/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}
export default App;
