import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import ProductForm from '../components/ProductForm';



export default() => {
    // const [message, setMessage] = useState("Looooooooooading...")

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api')
    //         .then(response => {
    //             setMessage(response.data.message)
    //         })
    // }, [])

    return (
        <div>
            <ProductForm/>
            {/* <p>Message from BACK END : {message}</p> */}
        </div>
    )
}