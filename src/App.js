import Header from "./component/Header";
import Cards from "./component/Cards";
import AddMovie from "./component/AddMovie";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
