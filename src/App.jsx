import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import HomePage1 from "./views/Habilidades";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Habilidades" element={<HomePage1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
