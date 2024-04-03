import "./App.css";
import MainPageComponent from "./main";
import { Link, Routes, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<MainPageComponent/>}/>
        <Route path={"/products/:id"} element={<ProductPage/>}/>
        <Route path={"/upload"} element={<UploadPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
