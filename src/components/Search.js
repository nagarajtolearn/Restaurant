import React, { useEffect, useState } from "react";
import "./style.css";
import FoodData from "./FoodData";
import appLogo from "../restaurant-logo.jpg";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Set from "./Set";

const Search = () => {
  const [fData, setFdata] = useState(FoodData);
  const [copydata, setCopyData] = useState([]);

  const changeData = (e) => {
    let getchangeData = e.toLowerCase();

    if (getchangeData == "") {
      setCopyData(fData);
    } else {
      let storeData = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangeData);
      });
      setCopyData(storeData);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyData(FoodData);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-between aglin-items-center">
        <img
          src={appLogo}
          alt="app-logo"
          style={{
            width: "10rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
            backgroundColor: "white",
            marginTop: 20,
          }}
        />
        <div className="signup d-flex justify-content-between aglin-items-center mt-3">
          <p style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
            Log in
          </p>
          <p style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
            Sign in
          </p>
        </div>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3 ">
        <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => changeData(e.target.value)}
            placeholder="Search Restaurant"
          />
        </Form.Group>
        <button
          className="btn text-light col-lg-1"
          style={{ background: "#ed4c67" }}
        >
          Submit
        </button>
      </Form>

      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontweight: 400 }}>
          Restaurants in Bangalore Open Now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {copydata && copydata.length ? (
            <Cards data={copydata} />
          ) : (
            <Set fdata={fData} />
          )}
        </div>
      </section>
      <hr />
      <footer className="footer">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies.
          <br /> All trademarks are properties of their respective owners.
          2008-2022 © Restaurant™ Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Search;
