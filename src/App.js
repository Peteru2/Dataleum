import { Routes, Route } from "react-router-dom";
import Landing from "./LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
       
    </Routes>
  );
}

export default App;
