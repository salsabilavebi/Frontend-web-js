import React from "react";
import {  Row, Col, Container } from "react-bootstrap";
import logo from "../assets/img/Image 14.png";
import peta from "../assets/img/Path 124.png";
const KabBogor = () =>{

    return(
    <Container>
    <><Row>
            <div className="col-md-1"> <img src={logo}  alt="logo" height="110" width="100"></img></div>
            <div className="col-md-5"><h1>Kab. Bogor</h1>
                <h4>DINAS PANGAN DAN PERKEBUNAN KAB.BOGOR</h4>
                <p> Jalan Kab. Bogor No.34 , 23434</p>
            </div>
        </Row><Row>
                <Col>
                    
                        <img src={peta} alt="peta" height="400" width="250">
                        </img>
                </Col>
                <Col>
            <table>    
                <tr>
                    <td size="90">Jumlah Kecamatan</td>
                    <td>: 30 </td>
                </tr>
                <tr>
                    <td>Jumlah Kelurahan</td>
                    <td>: 8 </td>
                </tr> 
                <tr>
                    <td>Jumlah Desa</td>
                    <td>:  145 </td>
                </tr>
                <tr>
                    <td>Jumlah Penduduk</td>
                    <td>: 1.456.678</td>
                </tr>
                <tr>
                    <td>Luas Wilayah</td>
                    <td>: 1.652.20 </td>
                </tr>
                <tr>
                    <td>Luas Bahan Baku Pertanian</td>
                    <td>:54.670</td>
                </tr>
                <tr>
                    <td>Luas Tanam e-RDKK</td>
                    <td>: 345.678</td>
                </tr>
                <tr>
                    <td>Jumlah Petani Penerima e-RDKK</td>
                    <td>: 123.456 </td>
                </tr>
                <tr>
                    <td>Jumlah Distributor</td>
                    <td>: 12 </td>
                </tr>
                <tr>
                    <td>Jumlah Kios </td>
                    <td>:300 </td>
                </tr>
                <tr>
                    <td>Komoditas Pertanian</td>
                    <td>: Padi, Jagung, Kentang</td>
                </tr>
                <tr>
                    <td>Alokasi </td>
                    <td>: 1000 </td>
                </tr>
                <tr>
                    <td>RDKK</td>
                    <td>: 1000 </td>
                </tr>
        </table>
            </Col>
            </Row></>
           
            </Container>
  );  
};

export default KabBogor;

