import React from "react";
import { Container, Col, Row} from "react-bootstrap";

import pd1 from "../assets/img/npk.png";
import pd2 from "../assets/img/urea.png";

const ProductComp = () =>{

    return(
    <div className="product">
      <Container>
      <Row>
      <h1>Pupuk Bersubsidi</h1>
      <p>Menurut Permentan jenis pupuk bersubsidi di bagi menjadi dua jenis</p>
      <Col className="pd">
      <img src={pd1} alt="pupuk" />
      <div className="content">
        <h3>NPK</h3>
      </div>
      </Col>  
      <Col className="pd2 ">
      <img src={pd2} alt="pupuk" />
      <div className="content">
        <h3>Urea</h3>
      </div>
      </Col>
      </Row>
      </Container>
    </div>
  );  



};

export default ProductComp;

