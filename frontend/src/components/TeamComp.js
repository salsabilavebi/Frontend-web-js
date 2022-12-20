import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


import Team1 from "../assets/img/Image 2.png";
import Team2 from "../assets/img/Image 3.png";
import Team3 from "../assets/img/Image 4.png";
import Team4 from "../assets/img/Image 6.png";
import Team5 from "../assets/img/Image 7.png";
import Team7 from "../assets/img/Image 8.png";
import Team8 from "../assets/img/Image 9.png";
import Team9 from "../assets/img/Image 10.png";
import Team10 from "../assets/img/Image 11.png";
import Team11 from "../assets/img/img1.png";
import Team12 from "../assets/img/img2.png";
import Team13 from "../assets/img/img3.png";
import Team14 from "../assets/img/img4.png";
import Team15 from "../assets/img/img5.png";
import Team16 from "../assets/img/img6.png";
import Team17 from "../assets/img/img7.png";

const TeamComp = () =>{

    return(
    <div className="Team">
    <center>
    <Container>
    <h1> OUR TEAM </h1>
    <p>Team Administrasi dan lapangan yang siap membantu 24/7 </p>
     <Row className="team1">
        <Col className="col">
        <img src={Team1} alt="pupuk" />
        </Col>
        <Col className="col-ml-2">
        <img src={Team2} alt="pupuk" />
        </Col>
        <Col className="g-2">
        <img src={Team3} alt="pupuk" />
        </Col>
        <Col className="g-2">
        <img src={Team4} alt="pupuk" />
        </Col>
        <Col className="g-2">
        <img src={Team5} alt="pupuk" />
        </Col>
      </Row>
        <Row>
        <Col>
        <img src={Team7} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team8} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team9} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team10} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team11} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team12} alt="pupuk" />
        </Col>
        </Row>
        <Row>
        <Col>
        <img src={Team13} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team14} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team15} alt="pupuk" />
        </Col>
        <Col>
        <img src={Team16} alt="pupuk" /> 
        </Col>
        <Col>
        <img src={Team17} alt="pupuk" />
        </Col>
        
     </Row>
     <Button href="/karyawanlist">Explore</Button>
    </Container>
    </center>
    </div>
  );  
};

export default TeamComp;

 