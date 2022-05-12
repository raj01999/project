import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      {/* In app.js HomeScreen is inside Container bootstrap Component So all the
      row ans col in inside container component  */}

      {/* In html imagine container is table and rows are table row and columns are table columns , so this way we are deviding the full container with some  part and all those part we called as card */}

      {/* Row is all the rows inside container  */}
      <Row>
        {products.map((product) => {
          return (
            // Col is all the columns inside container
            // here sm, md, lg, xl for responsive designe it's deide the container to dffertn size acording the the dixpaly size

            // The Bootstrap v4 grid system has five tiers of classes: xs (extra small), sm (small), md (medium), lg (large), and xl (extra large). You can use nearly any combination of these classes to create more dynamic and flexible layouts.

            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* Product component from components folder  */}
              <Product product={product}></Product>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
