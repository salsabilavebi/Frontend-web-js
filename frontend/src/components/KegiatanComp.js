import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import Gallery1 from "../assets/img/kg1.png";
import Gallery2 from "../assets/img/kg2.png";
import Gallery3 from "../assets/img/kg3.png";
import Gallery4 from "../assets/img/kg4.png";
import Gallery5 from "../assets/img/kg5.png";
import Gallery7 from "../assets/img/kg7.png";
import Gallery8 from "../assets/img/kg8.png";
import Gallery9 from "../assets/img/kg.png";

const KegiatanComp = () =>{

    return(
        <div className="galery min-vh-100">
           <Container>
            <h1>KEGIATAN</h1>
            <p>Kunjungan kerja, Demplot, Rapat Koordinasi yang kami lakukan adalah upaya </p>
            <p>kami memperbaiki diri demi kepuasan kepada para pelanggan</p>
            <Row className="g-4">
                <Col mt-2>
                <img src={Gallery1} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery2} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery3} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery4} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery5} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery7} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery8} alt="pupuk" />
                </Col>
                <Col mt-2>
                <img src={Gallery9} alt="pupuk" />
                </Col>
            </Row>
           </Container>
        </div>
    );
};

export default KegiatanComp;

