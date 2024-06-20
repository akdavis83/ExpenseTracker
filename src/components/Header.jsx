import { Container, Navbar } from "react-bootstrap"
import {SiMoneygram} from 'react-icons/si'



const Header = () => {
  return (
    <Navbar className=" bg-dark shadow mb-3">
    <Container>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <SiMoneygram style={{color: 'green', fontSize:'35px'}}/>
        <h3 className="text-light  ms-3">Expense Tracker</h3>           
     </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header