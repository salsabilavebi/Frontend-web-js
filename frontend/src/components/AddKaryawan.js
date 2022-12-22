import React,  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col,  Table} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddKaryawan = () => {
 
        const [nomor_badge, setNomor_badge] = useState("");
        const [nama_kar, setNama_kar] = useState("");
        const [tgl_lahir, setTgl_lahir] = useState("");
        const [jabatan, setJabatan] = useState("");
        const [nomor_badge, setNomor_badge] = useState("");
       
        const [file, setFile] = useState("");
        const [preview, setPreview] = useState("");
        const navigate = useNavigate();
      
        const loadImage = (e) => {
          const image = e.target.files[0];
          setFile(image);
          setPreview(URL.createObjectURL(image));
        };
      
        const saveProduct = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          try {
            await axios.post("http://localhost:5000/products", formData, {
              headers: {
                "Content-type": "multipart/form-data",
              },
            });
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        };
  

  return (
    <Container className="mt-3">
    <Row>
        <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
                <Card.Body>
                
                    <Form onSubmit={ storePost }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>TITLE</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>CONTENT</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            SIMPAN
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
  );  
};


export default AddKaryawan;

