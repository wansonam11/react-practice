import axios from "axios";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://de2f84e5-2619-467b-84f3-c862ec59c8d3.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생:" + error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png"></img>
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/icons/banner1.png"></img>
          <h1>판매되는 상품들</h1>
          <div id="product-list">
            {products.map(function (product, index) {
              return (
                <div className="product-card">
                  <Link className="product-link" to={`/product/${index}`}>
                    <div>
                      <img className="product-img" src={product.imageUrl}></img>
                    </div>
                    <div className="product-contents">
                      <span>{product.name}</span>
                      <span>{product.price}원</span>
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        ></img>
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            <div className="product-card"></div>
            <div className="product-card"></div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
