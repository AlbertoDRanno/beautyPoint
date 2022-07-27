import React, { Component } from "react"; //importo el Component, necesario para class
import "../assets/css/app.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ContentRow from "./ContentRow";
import LastProductInDB from "./LastProductInDB";
import CategoriesInDB from "./CategoriesInDB";
import Tabla from "./Tabla";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersTotal: 0,
      productsTotal: 0,
      categoriesTotal: 0,
      countByCategory: [],
      productsList: [],
      lastProduct: {},
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  traerInfoUsers() {
    this.apiCall("http://localhost:3000/api/users", this.mostrarInfoUsers);
  }
  traerInfoProducts() {
    this.apiCall(
      "http://localhost:3000/api/products",
      this.mostrarInfoProducts
    );
  }


  componentDidMount() {
    this.traerInfoUsers(),
      this.traerInfoProducts()
  }

  mostrarInfoUsers = (data) => {
    //console.log(data.data);
    this.setState({
      usersTotal: data.count,
    });
  };

  mostrarInfoProducts = (data) => {
    //console.log(data.data);
    this.setState({
      productsTotal: data.count,
      categoriesTotal: data.countByCategory.length,
      countByCategory: data.countByCategory,
      productsList: data.data,
      lastProduct: data.data[data.data.length - 1],
    });
  };


  render() {
    return (
      <>
        <div>
          <div>
            {/* //  <!-- PageContent --> */}
            <div className="container">
              {/* //  <!-- PageFeatures --> */}
              <div className="row text-center"></div>
            </div>
          </div>
        </div>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                {/* <!-- Content Row --> */}
                <div className="row">
                  <ContentRow
                    titulo="Users"
                    total={this.state.usersTotal}
                    border="card border-left-primary shadow h-100 py-2"
                    icono="fas fa-user-check fa-2x text-gray-300"
                  />
                  <ContentRow
                    titulo="Products"
                    total={this.state.productsTotal}
                    border="card border-left-success shadow h-100 py-2"
                    icono="fas fa-dollar-sign fa-2x text-gray-300"
                  />
                  <ContentRow
                    titulo="Categories"
                    total={this.state.categoriesTotal}
                    border="card border-left-warning shadow h-100 py-2"
                    icono="fas fa-clipboard-list fa-2x text-gray-300"
                  />
                </div>
                {/* <!-- Content Row --> */}
                <div className="row">
                  <LastProductInDB {...this.state.lastProduct} />
                  {/* // <!-- Categories in DB --> */}
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Categories in Data Base
                        </h6>
                      </div>
                      <div className="card-body">
                        {this.state.countByCategory.map((category, i) => (
                          <div key={i}>
                            <CategoriesInDB {...category} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of Main Content --> */}

              <Tabla productsList={this.state.productsList} />
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
