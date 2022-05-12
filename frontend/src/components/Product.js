import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* image is inside link, it will sent to specific product route  */}
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      {/* inside card.body , you havge to add evething while making card  */}
      <Card.Body>
        <Link to={`product/${product._id}`}>
          {/* Card.title is and hilight point inside card  */}
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* Hope you know what card.text normal paragrap tag with some css  */}
        <Card.Text as="div">
          {/* for Rrating check productScren componte in screens folder  */}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
