import CategoriesInDB from "./CategoriesInDB";

/*  Componente creado para contener los CategoriesInDB y linkearlos juntos,
 Hace un pasa mano con los datos */
function ContentCategories(props) {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Categories in Data Base
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {props.countByCategory.map((box, i) => {
                return <CategoriesInDB {...box} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCategories;
