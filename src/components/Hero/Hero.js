import { Row, Col, Container } from "react-bootstrap";
import Rating from '../Rating/Rating';
//style
import './Hero.scss';
//assets
import image_3 from '../../img/Image-3.png';
import image_4 from '../../img/Image-4.png';

function Hero() {
    return (
        <Container fluid>
            <Row className="heading-container">
                <Col xs={12} sm={12} md={6} className="heading-wrapper">
                    <h1 className="heading__h1">
                        Good Food Us Good Mood
                    </h1>
                    <p className="heading__caption hide-mobile">
                        I would think that conserving our natural resources<br /> should be a conservative position: Not to waste food, and <br />not to throw away a lot of the food that we buy.
                    </p>
                    <div className="btn-heading-wrapper hide-mobile">
                        <div className="btn-app btn__primary btn__shadow">Daftar Sekarang</div>
                        <div className="btn-app btn__secondary">About Us</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className="ilustration-wrapper">
                    <div className="ilustration__item">
                        <div className="ilustration__detail">
                            <img src={image_3} alt="picture-small"/>
                            <div className="___detail-item">
                                <h5>Green Salad Tomato</h5>
                                <p>Tomato</p>
                                <Rating rating={4}/>
                            </div>
                        </div>
                        <img src={image_3} alt="picture" id="picture-big"/>
                    </div>
                </Col>
                {/* show in mobile 480px */}
                <Col xs={12} sm={12} md={6} className="heading-wrapper hide-desktop">
                    <p className="heading__caption">
                        I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                    </p>
                    <div className="btn-heading-wrapper">
                        <div className="btn-app btn__primary btn__shadow">Daftar Sekarang</div>
                        <div className="btn-app btn__secondary">About Us</div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Hero;