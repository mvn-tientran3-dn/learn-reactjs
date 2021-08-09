import React, {useState} from "react";
import {Link} from "react-router-dom";

function ProductList() {

    const [products, setProducts] = useState([
        {
            'name' : 'Product 1',
            'id' : 1,
            'image': 'https://cdn140.picsart.com/80408675878191898490.jpg?type=webp&to=min&r=412&q=95'
        },
        {
            'name' : 'Product 2',
            'id' : 2,
            'image': 'https://cdn140.picsart.com/80408675878191898490.jpg?type=webp&to=min&r=412&q=95'
        },
        {
            'name' : 'Product 3',
            'id' : 3,
            'image': 'https://cdn140.picsart.com/80408675878191898490.jpg?type=webp&to=min&r=412&q=95'
        },
    ]);
    const productDetail = products.map((product, index) => (
        <div key={index} className="list-group">
            <Link activeClassName="active-class" to={{ pathname: '/products/'+product.id}} key={product.id}>
                <div className="product">
                    <img src={product.image} className="img-product" />
                    <div className="product-body">
                        <h5 className="product-title">{product.name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className="page">
            <h1>Product page</h1>
            {productDetail}
        </div>
    )
}

export default ProductList;
