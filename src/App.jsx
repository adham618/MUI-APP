import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes"
import Create from "./components/Create"
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
