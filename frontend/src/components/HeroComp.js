import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const HeroComp = () =>{

    return(
        <div className="hero min-vh-100 ">
            <Container>
                <Row>
                    <Col className="text-white text-center">
                    <h1> We are Providing</h1>
                    <h1>Best Business</h1>
                    <h1>Services</h1>
                    <h3>AVIV AHMAD F</h3>
                    <h3>VP SALES REGION 3A</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroComp;

