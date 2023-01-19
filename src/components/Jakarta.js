import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import jakarta from "../assets/img/jakarta.png";

const Jakarta = () =>{

    return(
    <div >
      <Container className="jabar">
        <center>
            <div className="heading">
                <h1 className="text-primary"><b> DKI Jakarta </b></h1>
            </div>
        </center>
        <Row>
         <Col>
        <img src={jakarta} alt="jabar"></img>
        </Col>
        <Col>
        <ol> 
        <li class=""><a href="/">Jakarta Pusat</a></li>
        <li class=""><a href="/">Jakarta Utara</a></li>
        <li class=""><a href="/">Jakarta Barat</a></li>
        <li class=""><a href="/">Jakarta Timur</a></li>
        <li class=""><a href="/">Jakarta Selatan</a></li>
        </ol>
        </Col>
        </Row>
</Container>
</div>
  );  
};

export default Jakarta;

