import {Carousel, Container, Image, Row, Col} from 'react-bootstrap';
import './styles/MyCarousel.css';


const MyCarousel = () => {
  return (
    <Container fluid  >
        <Row>
            <Col>
            <Carousel fluid >
      <Carousel.Item >
        <Image
        fluid
        rounded
        
        className='d-block w-100'
            src="/images/Dogs/Aspen 1.3.jpg"
            alt="First slide"
            
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <Image
        fluid
            rounded
            className='d-block w-100'

          src="/images/Dogs/Khan 1.2.jpg"
          alt="Second slide"
        
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <Image
        rounded
        fluid
        className='d-block w-100'

        src="/images/Dogs/Pippin and Rippy 1.2.jpg"
          alt="Third slide"
          
        />
       
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
    
    </Container>
  );
}

export default MyCarousel;