import "./App.css";
import MainPageComponent from "./main";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import {DownloadOutlined} from "@ant-design/icons";

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
          <img src="/images/icons/logo.png" alt="logo"></img>
          </Link>
          <Button size="large" onClick={function(){
              navigate("/upload");
          }} icon={<DownloadOutlined/>}>upload</Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path={"/"} element={<MainPageComponent />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          <Route path={"/upload"} element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
