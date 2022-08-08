import React, { Component } from "react";
import "../assets/css/app.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import LastProductInDB from "./LastProductInDB";
import ContentCategories from "./ContentCategories";
import UsersTable from "./UsersTable";
import ProductsTable from "./ProductsTable";
import ContentRowProducts from "./ContentRowProducts";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

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
    this.traerInfoUsers(), this.traerInfoProducts();
  }

  mostrarInfoUsers = (data) => {
    //console.log(data.data);
    this.setState({
      usersTotal: data.count,
      usersList: data.data,
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
                <Routes>
                  <Route path="/"></Route>
                  <Route
                    path="/ContentRowProducts"
                    element={
                      <ContentRowProducts
                        categoriesTotal={this.state.categoriesTotal}
                        productsTotal={this.state.productsTotal}
                        usersTotal={this.state.usersTotal}
                      ></ContentRowProducts>
                    }
                    exact="true"
                  ></Route>
                  <Route
                    path="/LastProductInDB"
                    element={<LastProductInDB {...this.state.lastProduct} />}
                    exact="true"
                  ></Route>
                  <Route
                    path="/ContentCategories"
                    element={
                      <ContentCategories
                        countByCategory={this.state.countByCategory}
                      />
                    }
                    exact="true"
                  ></Route>
                  <Route
                    path="/ProductsTable"
                    element={
                      <ProductsTable productsList={this.state.productsList} />
                    }
                    exact="true"
                  ></Route>
                  <Route
                    path="/UsersTable"
                    element={<UsersTable usersList={this.state.usersList} />}
                    exact="true"
                  ></Route>
                  <Route path="*" element={<NotFound />}></Route>
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
