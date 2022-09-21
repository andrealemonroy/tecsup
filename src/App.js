import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Thanks from "./components/Thanks/Thanks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gracias" element={<Thanks />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
