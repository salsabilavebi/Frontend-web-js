import React,  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Table} from "react-bootstrap";

const KaryawanList = () => {

  const [karyawans, setKaryawans] = useState([]);

  
  useEffect(() => {

      fectData();

  }, []);

 
  const fectData = async () => {
     
      const response = await axios.get('http://localhost:3000/api/karyawans');
      const data = await response.data.data;
      setKaryawans(data);
  }

  return (
      <Container className="mt-3">
          <Row>
              <Col md="{12}">
                  <Card className="border-0 rounded shadow-sm">
                      <Card.Body>
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
                                  { karyawans.map((karyawan, index) => (
                                      <tr key={ karyawan.id }>
                                          <td>{ index + 1 }</td>
                                          <td>{ karyawan.nama_kar }</td>
                                          <td>{ karyawan.tgl_lahir }</td>
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
};

export default KaryawanList;

