import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"

function NavBar (){
    return (
        <Navbar bg="light" expand="lg" className="NavBarre" >
        <Navbar.Brand href="#">Premier Projet React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Acceuil</Nav.Link>
            <Nav.Link href="#action2">A propos</Nav.Link>
            <NavDropdown title="Nos liens" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Nos actions</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Autres actions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">D'autres choix</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Lancer votre recherche"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
    
}

export default NavBar