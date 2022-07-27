import React, { Component } from "react"; //importo el Component, necesario para class
import "../assets/css/app.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ContentRow from "./ContentRow";
import LastProductInDB from "./LastProductInDB";
import CategoriesInDB from "./CategoriesInDB";

class App extends Component {
  // 1 - creo un estado inicial vacio. Inicializando las distintas propiedades. Si voy a guardarle un array, así lo defino
  constructor(props) {
    super(props);
    this.state = {
     // usersArray: [],
      usersTotal: 0,
    };
  }

  //6 - apiCall se encarga de traer un pedido por API mediante fetch
  apiCall(url, consecuencia) {
    //consecuencia = handlers

    fetch(url, {
      // method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      // headers: {
      //   "Content-Type": "application/json",
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));

    //    consumirDosAPIs: async (req, res) => {
    // /*cuando consumo más de una API, defino las promesas por separado
    // En cada caso, le estoy diciendo: de manera asincrónica, quiero que leas estas líneas de código
    //  y que esperes a que el .then se resuelva, y que guardes, lo que devuelva, en cada variable
    // correspondiente*/
    // let pelicula = await fetch(
    //   "http://www.omdbapi.com/?apikey=d4e35e92&t=Doctor+Strange"
    // ).then((response) => response.json());
    // let provinces = await fetch(
    //   "https://apis.datos.gob.ar/georef/api/provincias"
    // ).then((response) => response.json())
    //   .catch((err) => res.send(err));
  }

  //5- traerGifNuevo llama a "apiCall"
  traerGifNuevo() {
    /*lo que quiero es que ni bien se cargue la pagina, me levante la api, y una vez que 
    se levante la Api, me ejecute el método MostrarGif*/
    this.apiCall(
      //"http://localhost:3000/api/products/3",
      "http://localhost:3000/api/users",
      //7- luego de levantar la API, se ejecutará mostrarGif
      this.mostrarGif
    );
  }

  //4- se va ejecutar componentDidMount - se monta, y ejecuta a "traeGifNuevo"
  componentDidMount() {
    //console.log("Me monté!");
    this.traerGifNuevo();
  }

  /* como va a usar setState, necesitamos que mostrarGif sea una arrow function */
  mostrarGif = (data) => {
    console.log(data.data);
    console.log(data.count);
    //console.log(data.data[0].username);
    this.setState({
      //usersArray: data.data, //guardo el array completo de info, así cuento con un array para usar el map
      usersTotal: data.count,
    });
    //8- mostrarGif, va a cambiar el estado, y al cambiar el estado...
  };

  /*12- Siempre por las dudas, acá mando una alerta, que confirma al usuario, que ya tengo la 
  info novedosa. Sigue en //13 */
  // componentDidUpdate() {
  //   //console.log("Me actualicé!!");
  //   alert("si tuviera gifs nuevos, se recargarían!");
  // }

  //2- Declarado el estado del componente, se va a ejecutar render
  //9- se vuelve a ejecutar render
  render() {
    //console.log("Estoy renderizando");

    let contenido;

    if (this.state.usersArray === "") {
      contenido = <p> Los datos se están cargando... </p>;
      /* 3- render va a darse cuenta de que aun no tengo ningún gif, así que va a decir 
      "Los datos se están cargando...". al menos por una milésima de segundo */
    } else {
      // contenido = {
      //   usuarios: this.state.usersArray,
      //   TotalUsuarios: this.state.usersTotal,
      // };
      contenido = this.state.usersTotal;
      /*10 - en este caso, gifs no está vacío, sino que guardó en él (this.state.gifs) el array de info
      proveniente de la Api - En el caso de esta API, el array estaba en data.data. (El 1er data, viene
      de la consecuencia del fetch, línea 22, el 2do, porque así da la info esta página. Siempre ir viendo
      con los console.log). Guardé ese array en la variable "contenido" */
    }
    //console.log(contenido);

    return (
      <>
        <div>
          <div>
            {/* como uso otros métodos tengo que escribirla tipo arrow function */}
            {/* <Nav evento={() => this.traerGifNuevo()} /> */}
            {/* //13 - Le paso por props al botón de Nav, la función que tiene que realizar frente 
          al evento "onclick". Si hago click en el botón, se vuelve a ejecutar, traerGifNuevo, que
          vuelve a hacer un pedido a la API, que vuelve a actualizar el estado, y vuelve a mostrar 
          un gif Nuevo. Si es que la página tuviera más para mostrar, o yo usara menos.. (pendiente) */}
            {/* //  <!-- PageContent --> */}
            <div className="container">
              {/* //  <!-- PageFeatures --> */}
              <div className="row text-center">
                {/*//11 - Teniendo ahora un array de objetos ("contenido"), voy a iterarlos con MAP (dado que 
              no se pueden usar los FOR. Las llaves ("i"), son para uso interno de React, para que cada
              objeto iterado, tenga un nombre con el cuál identificarlo frente a los cambios.
              Acá lo que estoy haciendo, es enviarle, mediante props, un objeto al componente Gif. Y se
              van a renderizar tantos componentes Gifs, como objetos distintos ("gif") tenga el array.
              Para enviarle por props, SOLO el objeto (sin las llaves, corchetes, o resto de estructura
              que lo rodee), es que uso el spread operator (...). De esta forma, en Gif, opero directamente
              con las propiedades de ese objeto. Sigue en //12 */}
                {/* {contenido.map((gif, i) => (
                <div key={i}>
                  <Gif {...gif} />
                </div>
              ))} */}
              </div>
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
                    titulo="Usuarios"
                    usersTotal={this.state.usersTotal}
                  />
                  <ContentRow />
                  <ContentRow />
                </div>
                {/* <!-- Content Row --> */}
                <div className="row">
                  <LastProductInDB />
                  {/* // <!-- Categories in DB --> */}
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          Categories in Data Base
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <CategoriesInDB />
                          <CategoriesInDB />
                          <CategoriesInDB />
                          <CategoriesInDB />
                          <CategoriesInDB />
                          <CategoriesInDB />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of Main Content --> */}
              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
