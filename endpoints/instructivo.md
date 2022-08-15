Listado de endpoints disponibles para users y products
--
#### Users
- GET : "/users/profile/:id"
- GET : "/users/register"
- POST : "/users/register"
- GET : "/users/edit/:id"
- PUT : "/users/edit/:id"

#### Products
- GET : "/" (la home de la página levanta todos los productos de la base de datos)
- GET : "/products/create"
- GET : "/products/detail/:id"
- POST : "/products/create"
- GET : "/products/edit/:id"
- PUT : "/products/edit/:id"
- DEL : "/products/delete/:id"

Instructivo para testear los endpoints (setup Postman)
--
1- Importar las collection .json

![imagen](https://user-images.githubusercontent.com/1665906/184467387-d26adf51-29ab-44ab-9e93-d1293dcf1549.png)

2- Configurar la variable de environment:

![imagen](https://user-images.githubusercontent.com/1665906/184467396-bf5a0673-5ff9-4968-93f9-d43b63a7f441.png)

3- Antes de correr las collections, setear el environment deseado (en el drop aparecerá el environment seteado en el paso 2):

![imagen](https://user-images.githubusercontent.com/1665906/184467442-5b8df31a-757f-4a2b-9df2-22eb4ca5110e.png)

4- Listo. Ej de post de products a continuación:

![imagen](https://user-images.githubusercontent.com/1665906/184467509-aba85809-329d-4ec5-8c3d-d667b88007eb.png)
