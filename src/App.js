import Home from './Componenet/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Produi from './Componenet/product';
import {useState} from 'react';
import Pannier from './Componenet/pannier';
import Inscrire from './Componenet/login';
function App() {
  const [project,setproject] =useState ('home');
  const [panier,setpanier]=useState([]);
  const [size,setsize]=useState();
  const [login,setlogin]=useState({});
  const click=(products)=>{
    panier.push(products);
    setsize(panier.length);
  }
  return (
    <>
    <Navbar bg="succes" expand="lg" className='nav'>
    <Container>
      <Navbar.Brand className='Brand' href="#home">Zaki-SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className='Nav'><a onClick={()=>setproject('home')} >Acceil</a></Nav.Link>
          <Nav.Link className='Nav' ><a onClick={()=>setproject('product')} >prodouit</a></Nav.Link>
          <Nav.Link className='Nav' ><a onClick={()=>setproject('inscrire')} >Inscrire</a></Nav.Link>
          <Nav.Link className='Nav' ><span className='pan'>{size}</span><a onClick={()=>setproject('pannier')}><i className="fa-solid fa-cart-shopping panier"></i></a></Nav.Link> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
  {project==='inscrire'&&<Inscrire logine={login}/>}
  {project==='home'&&<div className="home"><Home click={click}/></div>}
  {project==='product'&&<div className="home"><Produi click={click}/></div>}
  {project==='pannier'&&<div className="home"><Pannier pannier={panier} setpannier={setpanier} setsizee={setsize}sizee={size}/></div>}
  </div>
 </>
  );
 
}
export default App;
