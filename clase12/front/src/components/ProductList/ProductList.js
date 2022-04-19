import React, { useEffect, useState } from "react";

import "./ProductList.css";
import { socket } from "../services/sockets";

const ProductList = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    socket.emit("askProducts");
    socket.on("update", data => {
      setResponseData(data);
    });
  }, []);

  return (
    <div>
      {responseData.length > 0 &&
        responseData.map((product, index) => {
          return (
            <div className="ProducList-div" key={index}>
              <p>{product.title} </p>
              <p>{product.price} </p>
              <img
                className="Img-Source"
                src={product.thumbnail}
                alt={product.title}
              ></img>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
