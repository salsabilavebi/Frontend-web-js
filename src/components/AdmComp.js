import React,  { useState, useEffect } from "react";
import axios from "axios";
import { Card,  Button} from "react-bootstrap";

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
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="holder.js/100px180" />
   <Card.Body>
   { karyawans.map((karyawan) => (
        <><tr key={karyawan.id}></tr><><Card.Title>{ karyawan.nama_kar }</Card.Title><Card.Title>{ karyawan.no_tlp }</Card.Title></></>
        )) }
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
  );  
};


export default AdmComp;

