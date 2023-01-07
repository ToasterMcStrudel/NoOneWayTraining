import { Container,Row,Col, Button } from "react-bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Nav} from "react-bootstrap"

export default function Navbar() {
  return (
    <Container fluid className="  bg-primary">
      <Row className="fs-1 text-light py-3 justify-content-center">
              <Col >
              No One Way Training
              </Col>
              <Col>
                <Button className="navbar-toggle" onClick={"mainNavBar"}>
                  <span className="icon-bar">asdfsd</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </Button>
              </Col>
      </Row>
      <Row className="py-2justify-content-lg-center">
        <Col>
        <Nav  className="fs-3 mx-0 p-0 " >
          
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/Services">Services</CustomLink>
            <CustomLink to="/Philosophy">Philosophy</CustomLink>
          </ul>
        </Nav>
        
        </Col>
      </Row>
      
    
    </Container>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}