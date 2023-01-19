import React from "react";
import { Card,   Col, Row, Table, Button} from "react-bootstrap";
import { Link } from "react-router-dom";


class GaleriList extends React.Component {

	// Constructor
	constructor(galeris) {
		super(galeris);
        
		this.state = {
			galeris: [],
			DataisLoaded: false
		};
	}

	
	
	componentDidMount() {
		fetch(
        "http://localhost:5000/galeris")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					galeris: json,
					DataisLoaded: true
				});
			})
	}

    
	render() {
		const { DataisLoaded, galeris } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
			<div className = "App">
			 <Row>
               <Col md="{12}">
                   <Card className="border-0 rounded shadow-sm">
                       <Card.Body>
                           <Button as={Link} to="/addgaleri" variant="success" className="mb-3">TAMBAH POST</Button>
                           <Table striped bordered hover className="mb-1">
                               <thead>
                                   <tr>
                                       <th>NO.</th>
                                       <th>Judul Kegiatan</th>
                                       <th>Foto Kegiatan 1</th>
                                       <th>AKSI</th>
                                   </tr>
                               </thead> 
                <tbody>{
				galeris.map((galeri, index) => (
                    <tr key={ galeri.id }>
                    <td>{ index + 1 }</td>
                    <td>{ galeri.judul_kegiatan }</td>
                    <td>{ galeri.foto_kegiatan1 }</td>
                    <td className="text-center">
                    <Button as={Link} to={`/EditGaleri/${galeri.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
                 
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

    };
};


export default GaleriList;

