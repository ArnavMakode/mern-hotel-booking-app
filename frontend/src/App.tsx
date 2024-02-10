import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./layouts/Layout";

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Layout/>}/>
      </Routes>
    </Router>
  )
}

export default App
