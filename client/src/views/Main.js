import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';




export default() => {
    
    const[product, setProduct] = useState([]);
    const[loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/new')
            .then(response => {
                setProduct(response.data); 
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])

    return (
        <div>
            
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product}/>}
            
            {/* <p>Message from BACK END : {message}</p> */}
        </div>
    )
}