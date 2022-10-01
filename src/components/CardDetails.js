import React, { useState, useEffect } from "react";
import "./style.css";
import Table from "react-bootstrap/esm/Table";
import NavBar from "./NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, del } from "../features/cart/cartSlice";

const CardDetails = () => {
  const [itemData, setItemData] = useState([]);
  const getData = useSelector((state) => state.cart.cartDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();

  const handleAddTocart = (item) => {
    dispatch(add(item));
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleDelete = (id) => {
    dispatch(del(id));
    history("/");
  };

  useEffect(() => {
    const compare = () => {
      let itemdata = getData.filter((item) => {
        return item.id == id;
      });
      setItemData(itemdata);
    };

    compare();
  }, [id, getData]);
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <h2 className="items text-center">Items Details</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {itemData.map((item) => {
              return (
                <>
                  <div className="items_img">
                    <img src={item.imgdata} alt="item-img" />
                  </div>
                  <div className="details" key={item.id}>
                    <Table className="item_table">
                      <tbody>
                        <tr className="d-flex justify-content-between ">
                          <td style={{ width: 250 }}>
                            <p>
                              <strong>Restaurant :</strong>&nbsp;
                              {item.rname}
                            </p>
                            <p>
                              <strong>Price :</strong> &nbsp;{item.price}
                            </p>
                            <p>
                              <strong>Dishes :</strong> &nbsp;{item.address}
                            </p>
                            <p>
                              <strong>Total :</strong>₹
                              {item.price * item.quantity}
                            </p>
                            <div
                              className="mt-3 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24, paddingLeft: 5 }}
                                onClick={
                                  item.quantity <= 1
                                    ? () => handleDelete(item.id)
                                    : () => handleRemove(item.id)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>
                                {item.quantity}
                              </span>
                              <span
                                style={{ fontSize: 24, paddingRight: 5 }}
                                onClick={() => handleAddTocart(item)}
                              >
                                +
                              </span>
                            </div>
                          </td>

                          <td style={{ width: 250 }}>
                            <p className="rating">
                              <strong>Rating : </strong>
                              <span
                                style={{
                                  backgroundColor: "green",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  padding: "2px 5px",
                                }}
                              >
                                &nbsp;{item.rating} &nbsp;★
                              </span>
                            </p>
                            <p className="rating">
                              <strong>Order Review : </strong>
                              <span>{item.somedata}</span>
                            </p>
                            <p className="rating">
                              <strong>Remove : </strong>
                              <span onClick={() => handleDelete(item.id)}>
                                <i
                                  className="fas fa-trash"
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
