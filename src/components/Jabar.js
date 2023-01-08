import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import jabar from "../assets/img/jabar.png";

const JabarComp = () =>{

    return(
    <div >
      <Container className="jabar">
        <center>
            <div className="heading">
                <h1 className="text-primary"><b> Jawa Barat </b></h1>
            </div>
        </center>
        <Row>
         <Col>
        <img src={jabar} alt="jabar"></img>
        </Col>
        <Col>
        <ol style= {{ listStyleType: 'decimal' }}> 
            <li>item</li> 
            <li>item</li> 
            <li>item</li> 
            <li>item</li> 
        </ol>
        </Col>
        </Row>
</Container>
</div>
  );  
};

export default JabarComp;

