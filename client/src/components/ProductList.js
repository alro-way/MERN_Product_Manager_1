import React from 'react';
import { Link } from '@reach/router';


export default props => {
    return(
        <div>
            {props.product.map((product, index) => {
                return <p><Link key={index} to ={"/product/" + product._id}>{product.title}, {product.price}</Link></p>
            })}
        </div>
    )
}