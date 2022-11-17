import React, { useState} from "react";
import Button from 'react-bootstrap/Button';
function Pannier  ({ pannier, setpannier,setsizee,sizee}){
  const[qte,setqte]=useState(0);  
  const [Total, setTotal] = useState(0);
  const Totale = (products) => {
    if(qte>=0){
    let Total = 0;
    pannier.map((products) => (Total += qte * products.price));
    setTotal(Total)}
    if(qte=0){
      setTotal(Total+=products.price)
    }
  };
  const plus =()=>{
    setqte(qte+1);
  }
  const moin =()=>{
    setqte(qte-1)
    if (qte<=0){
      setqte(0)
    }
  }
  const Remove = (id) => {
      const arr = pannier.filter((products) => products.id !== id);
      setpannier(arr);
      setsizee(sizee-1);
  };
  return (
    <article>
      {pannier.map((products) => (
        <div className="container_pannier" key={products.id}>
          <div className="cart_img">
          <span><img src={products.image} className='img' alt="nnn"/></span>
            <p>{products.title.slice(0,10)}</p>
            <span>Prix :{products.price}$</span><br/><br/>
            <div className="total">
        <span>Montant de {products.title.slice(0,10)} X {qte} : </span>
        <span>{ (products.price*qte) 
        } $</span>
      </div>
            <Button variant="success" button onClick={function(){plus();Totale({products})}}className='plus'>+</Button>{' '}
            <Button variant="light" className="qte">{qte}</Button>{' '}
            <Button variant="danger" button onClick={function(){moin()}}className='moin'>-</Button>{' '}
             <Button onClick={() =>Remove(products.id)} variant="danger" className="remove"><i className="fa-solid fa-trash"></i>Annuler</Button>{' '}
          </div>
          <br/> 
        </div>
      ))}
      <center>
        <div className="somme">
        <Button className="commande" variant="primary" onClick={()=>Totale()}>Montant</Button>{' '}
        <h3>Total : {Total*qte} $</h3 >
        </div><br/>
       </center>
    </article>
  );
};

export default Pannier;