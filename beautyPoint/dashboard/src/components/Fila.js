import React from "react";
import { Link } from "react-router-dom";

function Fila(props) {
  return (
    <>
      <td>
        <h6>{props.id}</h6>
      </td>
      <td>
        <h6>{props.name}</h6>
      </td>
      <td>
        <h6>{props.categories.description}</h6>
      </td>
      <td>
        <h6></h6>
        <Link to={props.detail}>View product detail</Link>
      </td>
      <td>
        <h6>{props.description}</h6>
      </td>
    </>
  );
}

export default Fila;
