import React,  { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col,  Form, Button} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const AddGaleri = () => {
 
        const [judul_kegiatan, setJudul_kegiatan] = useState("");
        const [file, setFoto_kegiatan1] = useState("");
        const [file1, setFoto_kegiatan2] = useState("");
        const [file2, setFoto_kegiatan3] = useState("");
        const [file3, setFoto_kegiatan4] = useState("");
        const [file4, setFoto_kegiatan5] = useState("");
        const [preview, setPreview] = useState("");
        const [preview1, setPreview1] = useState("");
        const [preview2, setPreview2] = useState("");
        const [preview3, setPreview3] = useState("");
        const [preview4, setPreview4] = useState("");
        const navigate = useNavigate();
      
        const loadImage = (e) => {
          const foto_kegiatan1 = e.target.files[0];
          setFoto_kegiatan1(foto_kegiatan1);
          setPreview(URL.createObjectURL(foto_kegiatan1));
        };
        
        const loadImage2 = (e) => {
            const foto_kegiatan2 = e.target.files[0];
            setFoto_kegiatan2(foto_kegiatan2);
            setPreview1(URL.createObjectURL(foto_kegiatan2));
          };

        const loadImage3 = (e) => {
            const foto_kegiatan3 = e.target.files[0];
            setFoto_kegiatan3(foto_kegiatan3);
            setPreview2(URL.createObjectURL(foto_kegiatan3));
          };

          const loadImage4 = (e) => {
            const foto_kegiatan4 = e.target.files[0];
            setFoto_kegiatan4(foto_kegiatan4);
            setPreview3(URL.createObjectURL(foto_kegiatan4));
          };
          const loadImage5 = (e) => {
            const foto_kegiatan5 = e.target.files[0];
            setFoto_kegiatan5(foto_kegiatan5);
            setPreview4(URL.createObjectURL(foto_kegiatan5));
          };
        const saveGaleri = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          formData.append("file1", file1);
          formData.append("file2", file2);
          formData.append("file3", file3);
          formData.append("file4", file4);
          formData.append("judul_kegiatan", judul_kegiatan);
         
          try {
            await axios.post("http://localhost:5000/galeris", formData, {
             
            });
            navigate("/galerilist");
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
                
                    <Form onSubmit={ saveGaleri }>
                        <Form.Group className="mb-3" >
                            <Form.Label>Judul Kegiatan</Form.Label>
                            <Form.Control type="text" value={judul_kegiatan} onChange={(e) => setJudul_kegiatan(e.target.value)} placeholder="" />
                        </Form.Group>
            
                    <Form.Group className="mb-3" >
                            <Form.Label>Foto Kegiatan 1</Form.Label>
                            <Form.Control type="file"   onChange={loadImage}  placeholder="" />
                    </Form.Group>

                    {preview ? (
                            <figure className="image is-128x128">
                            <image src={preview} alt="Preview Image" />
                            </figure>
                        ) : (
                            ""
                        )}

                    <Form.Group className="mb-3" >
                            <Form.Label>Foto Kegiatan 2</Form.Label>
                            <Form.Control type="file"   onChange={loadImage2}  placeholder="" />
                    </Form.Group>

                    {preview1 ? (
                            <figure className="image is-128x128">
                            <image src={preview1} alt="Preview Image" />
                            </figure>
                        ) : (
                            ""
                        )}
                    <Form.Group className="mb-3" >
                            <Form.Label>Foto Kegiatan 3</Form.Label>
                            <Form.Control type="file"   onChange={loadImage3}  placeholder="" />
                    </Form.Group>

                    {preview2 ? (
                            <figure className="image is-128x128">
                            <image src={preview2} alt="Preview Image" />
                            </figure>
                        ) : (
                            ""
                        )}

                    <Form.Group className="mb-3" >
                            <Form.Label>Foto Kegiatan 4</Form.Label>
                            <Form.Control type="file"   onChange={loadImage4}  placeholder="" />
                    </Form.Group>

                    {preview3 ? (
                            <figure className="image is-128x128">
                            <image src={preview3} alt="Preview Image" />
                            </figure>
                        ) : (
                            ""
                        )}
                    <Form.Group className="mb-3" >
                            <Form.Label>Foto Kegiatan 5</Form.Label>
                            <Form.Control type="file"   onChange={loadImage5}  placeholder="" />
                    </Form.Group>

                    {preview4 ? (
                            <figure className="image is-128x128">
                            <image src={preview4} alt="Preview Image" />
                            </figure>
                        ) : (
                            ""
                        )}
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


export default AddGaleri;

