import React from "react";
import productImage from "../assets/images/product_dummy.svg"
import { useParams, Link } from "react-router-dom"; // NECESARIO PARA CAPTURAR EL PARÁMETRO EN V6


function LastProductInDB(props) {
  return (
    // <!-- Last Product in DB -->
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Last product in Data Dase
          </h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src={productImage}
              alt="dummy"
            />
          </div>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.description}</p>
          <Link to="">View product detail</Link>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDB;
