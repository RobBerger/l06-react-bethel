import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/about-us" className="nav-link">About Us</Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>Welcome</h1>
      <p>Hello there! Thanks for visiting our website!</p>
    </>
  )}

export default Home