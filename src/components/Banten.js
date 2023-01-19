import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import banten from "../assets/img/banten.png";

const Banten= () =>{

    return(
 
      <Container className="jabar">
        <center>
            <div className="heading">
                <h1 className="text-primary"><b> Jawa Barat </b></h1>
            </div>
        </center>
        <Row>
         <Col>
        <img src={banten} alt="jabar"></img>
        </Col>
        <Col>
        <ol> 
        <li class=""><a href="/">Pandeglang</a></li>
        <li class=""><a href="/">Serang</a></li>
        <li class=""><a href="/">Cilegon</a></li>
        <li class=""><a href="/">Kota Serang</a></li>
        <li class=""><a href="/">Lebak</a></li>
        <li class=""><a href="/">Tangerang</a></li>
        <li class=""><a href="/">Tangerang Selatan</a></li>
        </ol>
        </Col>
        </Row>
</Container>

  );  
};

export default Banten;

