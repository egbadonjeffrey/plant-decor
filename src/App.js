import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
