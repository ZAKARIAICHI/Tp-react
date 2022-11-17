import Slide from "./slide";
import Product from './product';
//import Maps from "./maps";
function Home({click}){

    return(
    <>
     
    
       <Slide/><br/><br/>   
       <Product click={click}/>

       </> 
    )
}
export default Home;