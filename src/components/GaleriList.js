import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const GaleriList = () => {
 
   const [galeris, setGaleris] = useState([]);

   
   useEffect(() => {
       fectData();

   }, []);

   
   const fectData = async () => {
      
       const response = await axios.get('http://localhost:5000/galeris');
       const data = await response.data.data;

       setGaleris(data);
   }

   return (
       <Container className="mt-3">
           <Row>
               <Col md="{12}">
                   <Card className="border-0 rounded shadow-sm">
                       <Card.Body>
                           <Button as={Link} to="/addkaryawan" variant="success" className="mb-3">TAMBAH POST</Button>
                           <Table striped bordered hover className="mb-1">
                               <thead>
                                   <tr>
                                       <th>NO.</th>
                                       <th>TITLE</th>
                                       <th>CONTENT</th>
                                       <th>AKSI</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   { galeris.map((galeri, index) => (
                                       <tr key={ galeri.id }>
                                           <td>{ index + 1 }</td>
                                           <td>{ galeri.nama_kar }</td>
                                           <td>{ galeri.tgl_lahir }</td>
                                           <td className="text-center"></td>
                                       </tr>
                                   )) }
                               </tbody>
                           </Table>
                       </Card.Body>
                   </Card>
               </Col>
           </Row>
       </Container>
   );
}

export default GaleriList;