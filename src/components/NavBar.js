import React, { useState, useEffect } from "react";
import appLogo from "../restaurant-logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import cart from "../cart.gif";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { NavLink, useNavigate } from "react-router-dom";
import { del } from "../features/cart/cartSlice";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState([]);
  const getData = useSelector((state) => state.cart.cartDetails);
  const history = useNavigate();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    dispatch(del(id));
    history("/");
  };

  useEffect(() => {
    const total = () => {
      let cost = 0;
      getData.map((item) => (cost = item.price * item.quantity + cost));
      setPrice(cost);
    };
    total();
  }, [getData]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="container d-flex justify-content-between aglin-items-center">
            <NavLink to={`/`}>
              <img
                src={appLogo}
                alt="app-logo"
                style={{
                  width: "10rem",
                  position: "relative",
                  left: "2%",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
              />
            </NavLink>
            <NavLink to={`/`} style={{ textDecoration: "none" }}>
              <div className="home d-flex align-items-center mt-3">
                <p
                  style={{ color: "#fff", cursor: "pointer" }}
                  className="mt-3"
                >
                  Home
                </p>
              </div>
            </NavLink>
            <div className="signup d-flex justify-content-between align-items-center mt-3">
              <p style={{ color: "#fff", cursor: "pointer" }} className="mt-3">
                Log in
              </p>
              <p style={{ color: "#fff", cursor: "pointer" }} className="mt-3">
                Sign in
              </p>
              <Badge
                badgeContent={getData.length}
                color="primary"
                className="badge"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <i className="fa-solid fa-cart-shopping text-light"></i>
              </Badge>
            </div>
          </div>
        </Container>
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
            <div
              className="card_details"
              style={{ width: "24rem", paddind: 10 }}
            >
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
                            <NavLink
                              to={`/cart/${item.id}`}
                              onClick={handleClose}
                            >
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
                            <p>Quantity: {item.quantity}</p>
                            <p
                              className="mt-2"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                                paddingLeft: "6px",
                              }}
                              onClick={() => handleDelete(item.id)}
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
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fas fa-trash largetrash" />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <tr>
                    <td>
                      <p className="text-center mt-2">Total: ₹ {price}</p>
                    </td>
                  </tr>
                </tbody>
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
      </Navbar>
    </>
  );
};

export default NavBar;
