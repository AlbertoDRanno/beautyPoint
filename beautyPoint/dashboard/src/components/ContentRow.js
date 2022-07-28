function ContentRow(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className={props.border}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                Total {props.titulo} in Data Base
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.total}
              </div>
            </div>
            <div className="col-auto">
              <i className={props.icono}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRow;
