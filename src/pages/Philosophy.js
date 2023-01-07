import { Container,Row,Col, Card, Image } from 'react-bootstrap';
import MyCarousel from '../components/MyCarousel';
import './styles/Philosophy.css'

export default function Philosophy() {

    return (
        <Container fluid className='py-2'>
            <Row >
                <Col className="fs-2 fw-bold text-primary ">
                Philosophy
                </Col>
            </Row>
            <Row className='py-2'>
                <Col>
                    <Card className="shadow-sm order border-secondary" >
                        <Row>
                            <Col>
                                <Card.Body className='text-primary fs-4'>
                                <Card.Text>
                                    I have been working with dogs for around 10 years now and the one thing that
                                    I know is that every dog is a unique individual that learns in different ways
                                    and at different paces. This is the building blocks of my philosophy to training.
                                </Card.Text>
                                <Card.Text>
                                    Creating a well balanced working dog or pet dog with manners requires structure, 
                                    consistency, and time but above all else it takes a foundation in relationship-based
                                    training from owner to dog. It can take as little as 5 minutes to modify a behavior 
                                    but it can take longer than 5 months to make it habit. At the end of the day I believe                                    
                                    that each dog is a unique individual and that there is no one way to train your dog.                            
                                    </Card.Text>
                                </Card.Body>    
                            </Col>
                        </Row>
                        <Row className='p-2'>
                            <Col >
                            <MyCarousel className="mytesting"/>
                            </ Col>
                            {/* <Col className='p-2 align-self-center'>
                                <Image 
                                    
                                    rounded
                                    className='shadow-sm'
                                    src="/images/Dogs/Aspen 1.2.jpg"
                                    height="auto" 
                                    width={350} />
                            </Col>
                            <Col className='p-2'>
                                <Image 
                                    
                                    rounded
                                    className='shadow-sm'
                                    src="/images/Dogs/Khan 1.JPG"
                                    height="auto" 
                                    width={300} />
                            </Col>
                            <Col className='p-2 align-self-center'>
                                <Image 
                                    
                                    rounded
                                    className='shadow-sm '
                                    src="/images/Dogs/Pippin and Rippy 1.jpg"
                                    height="auto" 
                                    width={350} />
                            </Col> */}
                        </Row>  
                    </Card>
                </Col>    
            </Row>    
        </Container>
      );
}
