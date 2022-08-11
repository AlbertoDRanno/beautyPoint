# beautyPoint

### Repo de nuestro proyecto integrador Digital House - Ecommerce - Equipo #04

#### Idea del proyecto

**¨beautyPoint¨** será un sitio web orientado a la reventa de productos de una marca en particular: **"LACA"**. Dicha empresa tiene la particularidad de vender sus cremas y cosméticos sólo a profesionales de la estética para que éstos los utilicen en sus gabinetes y/o principalmente los revendan.

Aquí entra en juego nuestro proyecto: ofrecerle a **"LACA"** el desarrollo web del sitio para que se lo disponibilice a su fuerza de ventas (los profesionales de la estética que compran sus productos). De ésta manera los revendedores no sólo contarán con un espacio online para revender, sino que se les facilitará la gestión de las ventas ahorrándoles tanto la gestión manual de las mismas como las altas comisiones que cobran los marketplaces habituales. Por otro lado, **"LACA"** cuidará su imagen, ya que les impondrá un standard similar al modelo de franquicias.

Nuestro mencionado público objetivo indirecto (quienes serán los usuarios finales del sitio web) suelen ser en su mayoría mujeres, entre los 40 y 60 años, que ven en esta reventa de productos una forma de incrementar sus ingresos. Nuestro objetivo directo, **"LACA"**, accederá al sitio pero sólo a los tableros de gestión del mismo (para gestión de revendedores y consulta de métricas acordes al negocio).

#### Referentes del mercado (para inspirar secciones)

Como referencia para los wireframes de nuestro proyecto, nos gustaron las siguientes secciones de cada página:

- Home: https://jazminderosas.com/ (Por la estética y claridad de lo ofrecido)
- Detalle de producto: https://jazminderosas.com//parches-acne-fast-clear-patch-coony.html (Por su formato acorde: imagen y descripción)
- Carrito de compras: https://www.avon.com.ar/ (Por la funcionalidad y el listado de detalles ofrecidos)
- Formulario de registro: https://jazminderosas.com/customer/account/create/ (Por su claridad y datos útiles)
- Formulario de login: https://www.figma.com/ (Por su sencillez y dinamismo)

#### Quiénes somos. Integrantes del equipo

**Integrantes:**

- Alberto Ranno
- Augusto Serra
- Mauro Carvajal de Sousa
- ~~Mateo Volpe~~

#### Tablero Trello del equipo 04

https://trello.com/b/2tFnzpXC/tablero-equipo-04

## INSTRUCCIONES PARA DESCARGAR Y EJECUTAR EL PROYECTO beautyPoint:
#### Precondiciones: Tener instalado en la computadora: VSCode, Xampp y MySql Workbench.
#### Setup recomendado para Xampp y MySqlWorkbench (conexiones y puertos, etc):

![imagen](https://user-images.githubusercontent.com/1665906/184036913-a4105f01-6b93-4e46-9ba4-345ceb08fa49.png)

![imagen](https://user-images.githubusercontent.com/1665906/184036981-220b35ed-126f-49a0-9960-92b645a85df2.png)


**0- Ejecutar Xampp y darle "start" al servicio "MySql"**

![imagen](https://user-images.githubusercontent.com/1665906/184035403-b14b8306-274c-4dd4-bf1d-44b9f30ad464.png)


**1- Abrir el gestor de base de datos instalado, conectándose a localhost:**

![imagen](https://user-images.githubusercontent.com/1665906/184036521-a607f176-c9e4-493e-a23f-e01d61948d66.png)

**2- Con el gestor de base de datos instalado, abrir un nuevo tab para ingresar queries. Allí pegaremos y ejecutaremos los scripts para crear nuestro modelo de datos y también poblarlo con datos de pruena. Los scripts se encuentran disponibles en nuestro repositorio en el siguiente directorio:**
> structure.sql
> data.sql

![imagen](https://user-images.githubusercontent.com/1665906/184038881-f433e5a7-5401-446d-8e14-3de3143ed42f.png)

![imagen](https://user-images.githubusercontent.com/1665906/184038909-daf0eccd-2c28-4910-9d07-770aadcf5a86.png)

![imagen](https://user-images.githubusercontent.com/1665906/184039695-83a2dd3a-ad73-44d5-a125-f9ce83e26c57.png)


**3- Ejecutar VSCode. Posicionarse en una carpeta donde se desee descargar nuestro proyecto. Presionar botón derecho opción "open in integrated terminal" (esto abrirá una consola integrada dentro de VSCode en la ruta que indicamos).**

**4- Ahora, posicionados en la ruta del paso anterior, ejecutar el siguiente comando en la terminal y aguardar a que se descargue el proyecto:**
> git clone https://github.com/MauroCarvajalDeSousa/grupo_4_beautyPoint.git

**5- Ahora necesitamos instalar todas las dependencias utilizadas en nuestro proyecto. Utilizando la consola, posicionarse en el directorio "/grupo_4_beautyPoint/beautyPoint" y ejecutar el siguiente comando:**
> npm install

![imagen](https://user-images.githubusercontent.com/1665906/184040299-3351cb9b-c83c-44b4-a0d3-23e40c39e42c.png)


**6- Ahora, para iniciar el servidor ejecutar el comando:**
> npm start

![imagen](https://user-images.githubusercontent.com/1665906/184040421-b2c69a00-ea22-4c11-90d8-9a3312ca7908.png)

![imagen](https://user-images.githubusercontent.com/1665906/184043438-df1b2c9e-5f27-4b7d-a225-c0b09daf06f2.png)


**7- Para visualizar nuestro e-commerce, abrir un browser y en la barra de direcciones ingresar a:**
> http://localhost:3001/


## INSTRUCCIONES PARA DESCARGAR Y EJECUTAR EL PROYECTO dashboard:
#### Precondiciones: tener descargado y corriendo el proyecto beautyPoint (ver sección anterior)

**0- Ahora necesitamos instalar todas las dependencias utilizadas en nuestro proyecto dashboard. Utilizando la consola, posicionarse en el directorio "/grupo_4_beautyPoint/beautyPoint/dashboard" y ejecutar el siguiente comando:**
> npm install

![imagen](https://user-images.githubusercontent.com/1665906/184041634-06fbd8e2-2ca1-46d2-9a24-1e6dcf499450.png)

![imagen](https://user-images.githubusercontent.com/1665906/184041703-e9646bd6-4610-4c47-bb64-7218b49f93cf.png)

![imagen](https://user-images.githubusercontent.com/1665906/184041798-27dfc09c-bc31-4ce5-a203-8bf5d812a193.png)


**1- Ahora, para iniciar el servidor ejecutar el comando:**
> npm start

![imagen](https://user-images.githubusercontent.com/1665906/184043262-50eab6df-9310-4ea4-9eef-4c099cb24546.png)

