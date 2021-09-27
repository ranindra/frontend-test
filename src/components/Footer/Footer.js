import { Col, Container, Row } from "react-bootstrap";
import './Footer.scss';
//assets
import logo from '../../img/logo.png';
import mail from '../../img/mail-primary.svg';
import phone from '../../img/phone.svg';
import instagram from '../../img/instagram.svg';

function Footer() {
    return (
        <div className="section-container">
            <Container fluid className="footer-container footer-hide">
                <Row>
                    <Col md={5} className="footer__left">
                        <img src={logo} alt="logo" id="footer___logo" />
                        <div className="footer___address">
                            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                            Kecamatan Setiabudi, Kota Jakarta Selatan,
                            Daerah Khusus Ibukota Jakarta 12950
                        </div>
                        <div className="footer___socmed">
                            <div className="footer____icon">
                                <img src={mail} alt="icon" />
                            </div>
                            <div className="footer____icon">
                                <img src={phone} alt="icon" />
                            </div>
                            <div className="footer____icon">
                                <img src={instagram} alt="icon" />
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className="footer__middle">
                        <div className="footer___heading">Categories</div>
                        <div className="footer___item">Cupcake</div>
                        <div className="footer___item">Pizza</div>
                        <div className="footer___item">Kebab</div>
                        <div className="footer___item">Salmon</div>
                        <div className="footer___item">Doughnut</div>
                    </Col>
                    <Col md={2} className="footer__middle">
                        <div className="footer___heading">About Us</div>
                        <div className="footer___item">About Us</div>
                        <div className="footer___item">FAQ</div>
                        <div className="footer___item">Report Problem</div>
                    </Col>
                    <Col md={3} className="footer__middle">
                        <div className="footer___heading">Newsletter</div>
                        <div className="footer___item">Get now free 50% discount for all products on your first order</div>
                        <div className="subscribe-form">
                            <input placeholder="Your Email Address" />
                            <div id="btn-send">SEND</div>
                        </div>
                        <div className="detail-info">
                            <img src={mail} alt="email" />
                            elemesid@gmail.com
                        </div>
                        <div className="detail-info">
                            <img src={phone} alt="phone" />
                            0888 1111 2222
                        </div>
                    </Col>
                </Row>
            </Container>
            <h5 className="bottom-footer">
            © 2021 Elemes id. All rights reserved
            </h5>
        </div>    
    )
}

export default Footer;