import "./App.css";
import Header from "./components/Headers/header";
import ListProduct from "./components/ListProduct/DynamicList";

//import CSS
import "./css/header.css";
import "./css/aside.css";
import "./css/Search.css";
import "./css/Raitings.css";
import "./css/ProductDeatl.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/:id" element={<ListProduct />} />
        <Route path="*" element={<div>NotFountd</div>} />
      </Routes>
    </div>
  );
}

export default App;
