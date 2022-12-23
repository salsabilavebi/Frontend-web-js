import React,  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col,  Table, Button, CardGroup} from "react-bootstrap";

const AdmComp = () => {

  const [karyawans, setKaryawans] = useState([]);

  useEffect(() => {
    getKaryawans();
  }, []);

  

  const getKaryawans = async () => {
    const response = await axios.get("http://localhost:5000/karyawans");
    setKaryawans(response.data);
  };

 
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="../s" />
      <Card.Body>
      { karyawans.map((karyawan) => (
        <><tr key={karyawan.id}></tr><><Card.Title>{ karyawan.nama_kar }</Card.Title><Card.Title>{ karyawan.no_tlp }</Card.Title></></>
        )) }
        
      </Card.Body>
      
    </Card>
   
  </CardGroup>
  );  
};


export default AdmComp;

