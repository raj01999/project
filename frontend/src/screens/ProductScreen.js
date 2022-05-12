import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <>
      {/* Link , the alternative of a tag in html, a tag refress the page but link do the task with out refreshing the page, from react-router-dom  */}
      {/* class btn, btn-light make a light color button designe my-3 taking margin 3 on y axis */}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {/* check the detail about row and col on HomeScreen.js components in screens folder  */}

      {/* In app.js, we put HomeScreen and ProductsScreen in two switching routes , mean, if one is randering other one will not randaer, and col and row will devide the container */}
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          {/* In a table you can devide a single cell to differetn sub row again, the list group also doign the same */}
          <ListGroup variant="flush">
            {/* listGroup.Item are the sub row in here  */}
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>

            <ListGroup.Item>
              {/* it's create  star rating and take value and text as props, value is how many start your product have and text is how many peopele give rating  */}
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Descripton: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          {/* Card is a bootstartp component used for making the card you can refer to this css 
          but it changes acording to the display size by using media quary , it will be to big if I wrigt all media quary=>
          .card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
} */}
          <Card>
            {/* check up the comment from list group and list group item  */}
            {/* for row, col you can check HomeScreen component */}
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* this is button component, you can refert to the pic on whats app  */}
                <Button
                  disabled={product.countInStock === 0}
                  className="btn-block"
                  type="button"
                >
                  {" "}
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
