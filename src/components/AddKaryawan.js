import React,  { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col,  Form, Button} from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const AddKaryawan = () => {
 
        const [nomor_badge, setNomor_badge] = useState("");
        const [nama_kar, setNama_kar] = useState("");
        const [tgl_lahir, setTgl_lahir] = useState("");
        const [jabatan, setJabatan] = useState("");
        const [area_pemasaran, setArea_pemasaran] = useState("");
        const [status, setStatus] = useState("");
        const [no_tlp, setNo_tlp] = useState("");
        const [ukuran_baju, setUkuran_baju] = useState("");
        const [nomor_celana, setNomor_celana] = useState("");
        const [file, setFoto] = useState("");
        const [preview, setPreview] = useState("");
        const navigate = useNavigate();
      
        const loadImage = (e) => {
          const foto = e.target.files[0];
          setFoto(foto);
          setPreview(URL.createObjectURL(foto));
        };
      
        const saveKaryawan = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("file", file);
          formData.append("nomor_badge", nomor_badge);
          formData.append("nama_kar", nama_kar);
          formData.append("tgl_lahir", tgl_lahir);
          formData.append("jabatan", jabatan);
          formData.append("area_pemasaran", area_pemasaran);
          formData.append("status", status);
          formData.append("no_tlp", no_tlp);
          formData.append("ukuran_baju", ukuran_baju);
          formData.append("nomor_celana", nomor_celana);

          try {
            await axios.post("http://localhost:5000/karyawans", formData, {
             
            });
            navigate("/karyawanlist");
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
                
                    <Form onSubmit={ saveKaryawan }>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nomor Badge</Form.Label>
                            <Form.Control type="text" value={nomor_badge} onChange={(e) => setNomor_badge(e.target.value)} placeholder="" />
                        </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Nama Karyawan</Form.Label>
                            <Form.Control type="text" value={nama_kar} onChange={(e) => setNama_kar(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Tanggal Lahir</Form.Label>
                            <Form.Control type="date" value={tgl_lahir} onChange={(e) => setTgl_lahir(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Jabatan</Form.Label>
                            <Form.Control type="text" value={jabatan} onChange={(e) => setJabatan(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Area Pemasaran</Form.Label>
                            <Form.Control type="text" value={area_pemasaran} onChange={(e) => setArea_pemasaran(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>No Telephone</Form.Label>
                            <Form.Control type="text" value={no_tlp} onChange={(e) => setNo_tlp(e.target.value)} placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                            <Form.Label>Ukuran Baju</Form.Label>
                            <Form.Control type="text" value={ukuran_baju} onChange={(e) => setUkuran_baju(e.target.value)} placeholder="" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                            <Form.Label>Nomor Celana</Form.Label>
                            <Form.Control type="text" value={nomor_celana} onChange={(e) => setNomor_celana(e.target.value)} placeholder="" />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                            <Form.Label>Foto</Form.Label>
                            <Form.Control type="file"   onChange={loadImage}  placeholder="" />
                    </Form.Group>

                    {preview ? (
                            <figure className="image is-128x128">
                            <img src={preview} alt="Preview Image" />
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


export default AddKaryawan;

