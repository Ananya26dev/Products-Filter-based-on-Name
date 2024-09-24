import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { items } from "../products/Products";
import { CiShoppingCart } from "react-icons/ci";
import "../styles/Shop.css";
const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredItems = items.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Container fluid className="p-5" id="product-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-end">
            <form className="d-flex">
              <div className="input-container">
                <input
                  type="search"
                  className="me-2"
                  placeholder="Search"
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
                <button id="searchIcon" type="submit">
                  <FaSearch />
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          {filteredItems.map((product) => (
            <Col className="mb-3" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.name}
                />
                <div className="card-body">
                  <p className="card-text product-name">
                    {product.name}
                    <span id="addToCart">
                      <CiShoppingCart />
                    </span>
                  </p>
                  <span className="card-text product-price">
                    ${product.price}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Shop;
