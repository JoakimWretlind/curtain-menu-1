import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/Home";
import Models from './pages/Models';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </>
  );
}

export default App;
