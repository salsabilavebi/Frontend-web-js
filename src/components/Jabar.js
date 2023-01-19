import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import jabar from "../assets/img/jabar.png";

const Jabar = () =>{

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
        <ol> 
        <li class=""><a href="kabbogor">Kab. Bogor</a></li>
        <li class=""><a href="/">Kota Depok</a></li>
        <li class=""><a href="/">Kota Bogor</a></li>
        <li class=""><a href="/">Kota Sukabumi</a></li>
        <li class=""><a href="/">Kab. Sukabumi</a></li>
        <li class=""><a href="/">Kota Bekas</a></li>
        <li class=""><a href="/">Kab. Bekasi</a></li>
        <li class=""><a href="/">Kab. Karawang</a></li>
        <li class=""><a href="/">Kab. Purwakarta</a></li>
        <li class=""><a href="/">Kab. Cianjur</a></li>
        <li class=""><a href="/">Kota Cimahi</a></li>
        <li class=""><a href="/">Kab. Bandung Barat</a></li>
        <li class=""><a href="/">Kota Bandung</a></li>
        <li class=""><a href="/">Kab. Bandung</a></li>
        <li class=""><a href="/">Kab. Subang</a></li>
        <li class=""><a href="/">Kab. Garut</a></li>
        <li class=""><a href="/">Kab. Sumedang</a></li>
        <li class=""><a href="/">Kab. Indramayu</a></li>
        <li class=""><a href="/">Kab. Majalengka</a></li>
        <li class=""><a href="/">Kab. Tasikmalaya</a></li>
        <li class=""><a href="/">Kota Tasikmalaya</a></li>
        <li class=""><a href="/">Kab. Ciamis</a></li>
        <li class=""><a href="/">Kab. Cirebon</a></li>
        <li class=""><a href="/">Kota Cirebon</a></li>
        <li class=""><a href="/">Kab. Kuningan</a></li>
        <li class=""><a href="/">Kota Banjar</a></li>
        <li class=""><a href="/">Kab. Pangandaran</a></li>
        </ol>
        </Col>
        </Row>
</Container>
</div>
  );  
};

export default Jabar;

