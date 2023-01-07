import {useParams} from "react-router-dom"
import { Container,Row,Col, Card, Image } from 'react-bootstrap';
import "./styles/Services.css"

export default function Services() {
    const {id} = useParams();
    return ( 
    <Container className='py-2 text-primary servicesContainer fs-4'>
        <Row >
            <Col className="fs-2 fw-bold  " style={{textDecoration:"#b63854"}}>
            Services
            </Col>
        </Row>
        <Row  >
            <Col className="p-2 " >
                <Card className="border border-primary">
                    <Card.Body>
                            <Card.Title className="border-bottom border-primary text-secondary fs-3">
                            <p>$10 first hour session meet and greet</p>
                            <p>$30 addional hour sessions within Boise</p>
                            <p>Additional fee based on commute distance</p>
                                    {/**add distance calculater */}
                        </Card.Title>
                        <Card.Text >
                        <p>
                        Private sessions tailored to each owner and dog’s specific needs.
                        Can book one or more sessions based on training needs.
                        All sessions will come with an overview of what was covered and the homework for the week.</p>
                        <p className="fw-bold">Available Saturday - Tuesday from 9am-7pm</p> 
                        <p className="fw-bold">Call, Text or Email for appointments</p>
                        <Image 
                                    fluid
                                    rounded
                                    className='shadow-sm float-center '
                                    src="/images/Dogs/Finley 4.JPG"
                                    width={300}
                                     />
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </Row>
        <Row>
            <Col className="p-2 ">
                <Card className="border border-primary">
                    <Card.Body>
                        <Card.Title className="border-bottom border-primary text-secondary fs-3">
                        Board and Train – $1,000 for 2 weeks – *Coming soon*
                        </Card.Title>
                        <Card.Text>
                        In house board and train at trainer’s home, prefer 2-week minimum to better modify and solidify new behaviors. 
                        Your pup will get multiple training sessions throughout the day and will have the opportunity to go on an outside adventure (if the owner wishes, i.e., hiking). 
                        Daily/weekly updates that may consist of picture/video footage of your pups progress. 
                        </Card.Text>
                        <Card.Text>
                        Comprehensive list of all behaviors worked on will be given at the end of the two weeks. 
                        Highly recommend at least 3 follow up sessions with trainer after the pup completes board and train to reinforce new behaviors. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>      
    </Container>);
}
