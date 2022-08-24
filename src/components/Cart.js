import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import cart from "../cart.gif";
import { useSelector } from "react-redux/es/exports";
import Table from "react-bootstrap/esm/Table";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const getData = useSelector((state) => state.cart.cartItems);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getData.length ? (
          <div className="card_details" style={{ width: "24rem", paddind: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant name</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((item) => {
                  return (
                    <>
                      <tr key={item.id}>
                        <td>
                          <NavLink to={`/cart/${item.id}`}>
                            <img
                              src={item.imgdata}
                              style={{
                                width: "5rem",
                                height: "5rem",
                                cursor: "pointer",
                                position: "relative",
                              }}
                              alt="item_img"
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{item.rname}</p>
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.cartQuantity}</p>
                          <p
                            className="mt-2"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                              paddingLeft: "6px",
                            }}
                          >
                            <i className="fas fa-trash smalltrash" />
                          </p>
                        </td>
                        <td>
                          <p
                            className="mt-2"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                              paddingLeft: "6px",
                            }}
                          >
                            <i className="fas fa-trash largetrash" />
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
              <p className="text-center mt-2">Total: ₹300</p>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "20rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
            <p style={{ fontSize: 22 }}>Your cart is empty</p>
            <img
              src={cart}
              alt="cart"
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </>
  );
};

export default Cart;
