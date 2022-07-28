<ContentRowProducts
  categoriesTotal={this.state.categoriesTotal}
  productsTotal={this.state.productsTotal}
  usersTotal={this.state.usersTotal}
></ContentRowProducts>;

 <div className="row">
   <Route
     path="/LastProductInDB"
     element={<LastProductInDB {...this.state.lastProduct} />}
     exact="true"
   ></Route>

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
             <Route
               path="/CategoriesInDB"
               element={<CategoriesInDB {...category} />}
               exact="true"
             ></Route>
           </div>
         ))}
       </div>
     </div>
   </div>
 </div>;