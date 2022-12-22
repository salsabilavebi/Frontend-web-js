import React,  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col,  Table, Button} from "react-bootstrap";

const KaryawanList = () => {

  const [karyawans, setKaryawans] = useState([]);

  useEffect(() => {
    getKaryawans();
  }, []);

  

  const getKaryawans = async () => {
    const response = await axios.get("http://localhost:5000/karyawans");
    setKaryawans(response.data);
  };

  
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
                                      <th>FOTO</th>
                                      <th>AKSI</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  { karyawans.map((karyawan, index) => (
                                      <tr key={ karyawan.id }>
                                          <td>{ index + 1 }</td>
                                          <td>{ karyawan.nama_kar }</td>
                                          <td>{ karyawan.jabatan }</td>
                                          <td>{ karyawan.foto }</td>
                                          <td className="text-center"></td>
                                          <Button as={Link} to={`/editkaryawan/${karyawan.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
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

