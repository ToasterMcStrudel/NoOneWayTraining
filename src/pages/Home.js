
import { Container,Row,Col, Card, Image } from 'react-bootstrap';
import './styles/Services.css'

export default function Home() {
    return (
        <Container fluid className='py-2 fs-4 servicesContainer'>
            <Row >
                <Col className="fs-2 fw-bold text-primary ">
                Home
                </Col>
            </Row>
            <Row  className='py-2'>
                <Col>
                    <Card className={"shadow-sm border border-secondary "}  >
                        <Card.Body className='text-primary'>
                        <Row className='pt-2'>
                            <Col >
                            <Image 
                                    fluid
                                    rounded
                                    className='float-end shadow-sm '
                                    src="/images/Dogs/4DogsAndBabeCrop2.jpg"
                                    width={420}
                                     /> 
                                <Card.Text >Hi, my name is Anais Robertson and I would love to work with you and your dog! I graduated from Washington State University Summer
                                of 2022 with a B.S. in Wildlife Ecology & Conservation and a minor in Forestry.
                                </Card.Text> 
                                <Card.Text >
                                I have spent the last 10+ years working with my personal dogs as well as friends and 
                                family’s dogs in behavior modification and trick work. 
                                </Card.Text> 
                            
                               
                            
                            </Col>
                        </Row >
                        <Row className='py-3'>
                            <Col>
                                <Card.Text>
                                During my college years I worked with a local dog daycare and training company and started working in a 
                                more professional capacity with dog training expanding my skills to running large group
                                classes from puppy to advanced training as well as assisting in Canine Good Citizen preparation and rally courses.
                                </Card.Text> 
                            </Col>
                        </Row>
                        <Row className='py-3'>
                            <Col>
                            <Image 
                                    fluid
                                    rounded
                                    className='shadow-sm float-start'
                                    src="/images/Dogs/Nelly 8.JPG"
                                    height="auto" 
                                    width={340} />
                            
                             <Card.Text >
                                    My concentration was working one on one with clients to help them build a better relationship with their dogs, 
                                    all while gaining experience working with reactivity in dogs and confidence building with more fearful pups.
                                </Card.Text>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row className='py-2'>
                <Col>
                    <Card className={"shadow-sm border border-secondary "} >
                        <Card.Body className='text-primary'>
                        <Row>
                            <Col>
                            <Image 
                                    rounded
                                    className='shadow-sm float-end'
                                    src="/images/Dogs/Finley 6.JPG"
                                    height="auto" 
                                    width={330} />
                            <Card.Text>
                                    In between work and classes I worked with two service dog companies through the daycare and training company, 
                                    Canine Companions for Independence out of California and Autism Anchoring Dogs in Oregon to further the social 
                                    development of puppies from ages 8 weeks to 1.5years in extra exposure for their public access hours on college 
                                    campus grounds and stores. As well as working with Palouse Paws, a therapy program that utilizes pups to provide 
                                    comfort to those in need at hospitals, schools, and college campus events.
                                </Card.Text>
                            
                            
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>      
            <Row className='py-2'>
                
                <Col>
                    <Card className={"shadow-sm border border-secondary "} >
                        <Card.Body className='text-primary'>
                            <Row>
                                <Col>
                                <Image 
                                    fluid
                                    rounded
                                    className='shadow-sm float-start '
                                    src="/images/Wolf Images/image_6483441.JPG"
                                    width={500}
                                     />
                                
                                <Card.Text>
                                    This summer I completed a 2-month internship in Indiana working with wolves, bison and foxes in operant 
                                    conditioning and positive reinforcement to promote advocacy for wolf reintroduction and education to help further 
                                    public knowledge and remove misconceptions about predator to prey relationships with humans.
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>           
        </Container>
    );
}


{/* <Image 
                                    rounded
                                    className='shadow-sm'
                                    src="/images/Dogs/4DogsAndBabeCrop.jpg"
                                    height="auto" 
                                    width={200} /> */}
