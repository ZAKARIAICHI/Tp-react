import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

function Slide() {
  return (
    <center>
    <Container>
    <div className='slider'>
    <Carousel>
      <Carousel.Item className='a'>
        <img
          className="d-block w-100 w"
          src="https://wallpaperaccess.com/full/829212.jpg"
          alt="First slide"
          
          
        />
        <Carousel.Caption>
          <h3>Tv</h3>
          <p>Android Tv Normal Tv</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 w"
          src="https://www.guidingtech.com/wp-content/uploads/Download-iPhone-14-and-iPhone-14-Pro-Series-Wallpapers.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Smart Phone</h3>
          <p>Iphone 14</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <img 
          className="d-block w-100 w"
          src="https://wallpaperaccess.com/full/2489629.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Vetement</h3>
          <p>
            Home/femme
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </Container></center>
  );
}

export default Slide;