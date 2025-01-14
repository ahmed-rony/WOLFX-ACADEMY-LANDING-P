import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
