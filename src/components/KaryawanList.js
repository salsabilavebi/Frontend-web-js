import React from "react";

import { Card, Row, Col, Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

class KaryawanList extends React.Component {

	// Constructor
	constructor(karyawans) {
		super(karyawans);
        
		this.state = {
			karyawans: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
        "http://localhost:5000/karyawans")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					karyawans: json,
					DataisLoaded: true
				});
			})
	}

    
	render() {
		const { DataisLoaded, karyawans } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
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
                <tbody>{
				karyawans.map((karyawan) => (
                    <tr key={ karyawan.id }>
                    <td>1</td>
                    <td>{ karyawan.nama_kar }</td>
                    <td>{ karyawan.tgl_lahir }</td>
                    <td className="text-center">
                    <Button as={Link} to={`/EditKaryawan/${karyawan.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
                 
                    </td>
                </tr>
				))
			}
		
        </tbody>
                           </Table>
                       </Card.Body>
                   </Card>
               </Col>
           </Row>
     
       </div>
	);
}
}


                               
  

export default KaryawanList;