import React from "react";
import { Card,  Button, Col, Row, Container} from "react-bootstrap";

class AdmComp extends React.Component {

	// Constructor
	constructor(karyawans) {
		super(karyawans);
        
		this.state = {
			karyawans: [],
			DataisLoaded: false
		};
	}

	
	
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
    
		<Container>
    <Row className="g-2">
      { karyawans.map((karyawan) => (
       
       <Col>
			 <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
     
              <><tr key={karyawan.id}></tr><><Card.Title>{ karyawan.nama_kar }</Card.Title><Card.Title>{ karyawan.no_tlp }</Card.Title></></>
              
          <Button variant="danger"></Button>
        </Card.Body>
      </Card>
      </Col>
      )) }
        
    </Row>
    </Container>
	  );

    };
};


export default AdmComp;

