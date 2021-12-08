import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: purple
  }
})

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
