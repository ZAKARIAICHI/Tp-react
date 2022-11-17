import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
 const Product = ({click})=>{
  const [product,setproduct]=useState([]);
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
   .then((res)=>{setproduct(res.data)})
  },[]);
return(
  <Container  className='container'>
    <Container className='contain'>
{product.slice(0,6).map(products=>{
return(
<div className='cards' key={products.id}> 
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='ge'>
{products.title.slice(0,10)}</h3><h3 className='prix'>Prix {products.price} $</h3>
<p  className='g'>{products.description.slice(0,10)}...
category:{products.category}
</p>
<button className='Button' onClick={()=>click(products)}>Acheter  <i className="fa-sharp fa-solid fa-shop s"></i></button>
</div>
)
})}
</Container><br/>
<Container className='contain'>
{product.slice(14,20).map(products=>{
return(
<div className='cards' key={products.id}> 
<img src={products.image} alt='imag' className='imgs'/>
<h3 className='ge'>
{products.title.slice(0,10)}</h3><h3 className='prix'>Prix {products.price} $</h3>
<p  className='g'>{products.description.slice(0,10)}...
category:{products.category}
</p>
<button className='Button' onClick={()=>function(){click(products)}}>Acheter  <i className="fa-sharp fa-solid fa-shop s"></i></button>
</div>
)
})}</Container>
</Container>
)};

export default Product