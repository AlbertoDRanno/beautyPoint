import React from "react";

function CategoriesInDB(props) {
  return (
    // <!-- Categories in DB -->

    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
          <div className="card-body">
            <em>{props.totalDeProductos}</em>{" "} {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDB;
