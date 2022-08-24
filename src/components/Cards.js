import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddTocart = (item) => {
    dispatch(add(item));
  };

  return (
    <>
      {data.map((item, id) => {
        return (
          <>
            <Card
              key={item.id}
              style={{ width: "22rem", border: "none" }}
              className="mb-4 hover"
            >
              <Card.Img variant="top" className="cd" src={item.imgdata} />
              <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center">
                  <h4 className="mt-2">{item.rname}</h4>
                  <span>{item.rating}&nbsp;★</span>
                </div>
                <div className="lower_data d-flex justify-content-between">
                  <h5>{item.address}</h5>
                  <span>₹{item.price} for one</span>
                </div>
                <div className="extra"></div>
                <div className="last_data d-flex justify-content-between align-items-center">
                  <img src={item.arrimg} className="limg" alt="img" />
                  <p>{item.somedata}</p>
                  <img src={item.delimg} className="laimg" alt="max-safety" />
                </div>
                <div className="add_to_cart d-flex justify-content-end align-items-center mb-2">
                  <Button
                    variant="primary"
                    onClick={() => handleAddTocart(item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
