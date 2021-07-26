import React, {useState} from "react";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import ProductDetail from "./ProductDetail";

function ProductList() {

    const [products, setProducts] = useState([
        {
            'name' : 'Product 1',
            'id' : 1,
        },
        {
            'name' : 'Product 2',
            'id' : 2,
        },
        {
            'name' : 'Product 3',
            'id' : 3,
        },
    ]);
    const productDetail = products.map((product, index) => (
        <div key={index}>
            <NavLink exact activeClassName="active-class" to={{ pathname: '/product/'+product.id}} key={product.id}>{product.name}</NavLink>
        </div>
    ));

    return (
        <div className="page">
            <h1>Product page</h1>
            <div className="list-group">
                <Router>
                    <div className="block-left">
                        {productDetail}
                    </div>
                    <div className="block-right">
                        <Route path="/product/:id" component={ProductDetail}/>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default ProductList;
