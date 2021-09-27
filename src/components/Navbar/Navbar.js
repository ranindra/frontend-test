import { Col, Container, Row } from "react-bootstrap";
//style
import './Navbar.scss'
//assets
import logo from '../../img/logo.png';

function Navbar() {
    return (
        <Container fluid>
            <Row  className="nav-wrapper">
                <Col xs={6} sm={6} md={3} lg={3}>
                    <img src={logo} alt="logo" id="logo" />                    
                </Col> 
                <Col md={6} lg={6} className="nav-wrapper nav-hide">
                    <div className="nav">
                        <div className="nav__item">Home</div>
                        <div className="nav__item">About</div>
                        <div className="nav__item">Promotions<span id="notification">hot</span></div>
                        <div className="nav__item">Blogs</div>
                        <div className="nav__item">Contact Us</div>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="nav-btn-wrapper">
                        <div className="btn-app btn__transparent nav-hide">
                            Masuk
                        </div>
                        <div className="btn-app btn__primary">
                            Daftar Sekarang
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar;