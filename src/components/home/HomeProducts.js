/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeProducts = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    axios
      .get("http://localhost:3000/api/products")
      .then((val) => {
        setData(val.data.data);
        setCount(val.data.count);
        console.log(val);
      })
      .catch((error) => console.log("Error API MERN", error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="container py-5"
      style={{ minHeight: "calc(100vh - 128px)" }}
    >
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-bold">Count : {count && count}</div>
          <button
            className="btn text-white "
            type="button"
            style={{ background: "var(--primary-color)" }}
          >
            إضافة منتج
          </button>
        </div>
        <div className="row gy-4 mt-3 ">
          {count === 0 ? (
            <h3 className="text-center mt-5 pt-5 fw-bold">
              ...لا توجد بيانات...
            </h3>
          ) : (
            data &&
            data.map((item, i) => (
              <div
                className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
                key={i}
                // style={{ height: 400 }}
              >
                <div className="card border-0 rounded-4 style-shadow-small">
                  <img
                    src="../../images/img-01.png"
                    className="rounded-top-4"
                    style={{ maxWidth: "100%", height: "100%" }}
                    alt="logo"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <div className="card-text my-2">{item.description}...</div>
                    <div className="card-text">
                      <span>
                        <strong>Price :</strong>{" "}
                      </span>
                      <small className="text-body-secondary">
                        {item.price} $
                      </small>
                    </div>
                    <div className="card-text">
                      <span>
                        <strong>Size :</strong>{" "}
                      </span>
                      <small className="text-body-secondary">{item.size}</small>
                    </div>
                    <div className="card-text">
                      <span>
                        <strong>Date :</strong>{" "}
                      </span>
                      <small className="text-body-secondary">
                        {item.date.split(",")[0]}
                      </small>
                    </div>
                    <button
                      className="btn w-100 mt-3 rounded-5 text-white"
                      type="button"
                      style={{ background: "var(--primary-color)" }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
