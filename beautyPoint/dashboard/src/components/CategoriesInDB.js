function CategoriesInDB(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-info text-white shadow">
        <div className="card-body">
          <em>{props.totalDeProductos}</em> {props.description}
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDB;
