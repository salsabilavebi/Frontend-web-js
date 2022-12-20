import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

const AvpComp = () =>{

    return(
        <center>
        <div className="avp">
            <Container>
            <Row>
                <Col>
            <img
              alt=""
              src="./icon/Logo.png"
              width="500"
              height="500"
              className="d-inline-block align-top"
            />
            <Container>
            <Button variant="danger">OUR TEAM</Button>{' '}
            <Button href="#" variant="outline-dark" className="m-2">Jawa Barat</Button>
            <Button href="#" variant="outline-dark" className="m-2">Banten</Button>
            <Button href="#" variant="outline-dark" className="m-2">DKI Jakarta</Button>
            </Container>
            
            <Container >
            <Row className="mt-5">
              <Col>
              <img
              alt=""
              src="./icon/fajar.png"
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
            <center>
                        <h5>
                        <p>AVP  Wilayah Jabar 1</p >
                        <p> Fajar </p>
                        </h5>
                        <h7>
                        <p> Subang </p>
                        <p> Indramayu </p>
                        <p> Karawang </p>
                        <p> Kab. Cirebon </p>
                        <p> Kota Cirebon</p>
                        </h7>
            </center> 
              </Col>
              <Col>
              <img
              alt=""
              src="./icon/Dimas.png"
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
            <center>
                        <h5>
                        <p>AVP  Wilayah Jabar 2</p>
                        <p> Sidarta </p>
                        </h5>
                        <h7>
                        <p> Kab Bandung </p>
                        <p> Kota Bandung </p>
                        <p> Kab Bandung Barat </p>
                        <p> Kota Cimahi </p>
                        <p> Cianjur</p>
                        <p> Bogor</p>
                        <p> Sukabumi</p>
                        <p> Kota Depok</p>
                        <p> Bekasi</p>
                        <p> Kota Bekasi</p>
                        <p> DKI Jakarta</p>
                        </h7>
                        </center>
              </Col>
              <Col>
              <img
              alt=""
              src="./icon/sidarta.png"
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
            
            <center>
                        <h5>
                        <p>AVP  Wilayah Jabar 3</p>
                        <p> Dimas S</p>
                        </h5>
                        <h7>
                        <p> Sumedang </p>
                        <p> Garut </p>
                        <p> Kota Tasikmalaya </p>
                        <p> Ciamis </p>
                        <p> Pangandaran</p>
                        <p> Kota Banjar</p>
                        <p> Majalengka</p>
                        <p> Kuningan</p>
                        </h7>
            </center>
              </Col>
              <Col>
              <img
              alt=""
              src="./icon/Foto.png"
              width="200"
              height="200"
              className="d-inline-block align-top"
            />
             <center>
                        <h5>
                        <p>AVP  Wilayah Banten</p>
                        <p> Dicky</p>
                        </h5>
                        <h7>
                        <p> Tangerang </p>
                        <p> Kota Tangerang </p>
                        <p> Kota Tangerang Selatan</p>
                        <p> Serang </p>
                        <p> Lebak</p>
                        <p> Pandeglang</p>
                        </h7>
            </center>
              </Col>
            </Row>
            </Container>
            </Col>
            </Row>
            </Container>
            
        </div>
        </center>
        
    );
};

export default AvpComp;

