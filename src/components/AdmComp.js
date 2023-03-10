import React from "react";
import { Card,  Button, Col, Row, Container, Navbar, Nav,} from "react-bootstrap";
import pupuk from "../assets/img/pupuk.png";
import foto from "../assets/img/foto.png";

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
			<><div className="Navbar">
				<Navbar>
					<Container>
						<Navbar.Brand href="/">
							<img
								alt=""
								src={pupuk}
								width="100"
								height="50"
								className="d-inline-block align-top" />
						</Navbar.Brand>
						<Nav className="ms-auto">
							<Nav.Link href="/">Tetang Kami</Nav.Link>
							<Nav.Link href="/">Karir</Nav.Link>
							<Nav.Link href="/">Blog</Nav.Link>
							<Nav.Link href="/karyawan">Admin</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</div><Container>
					<Row className="g-2">
						{karyawans.map((karyawan) => (

							<Col>
								<Card style={{ width: '13rem' }}>
									<Card.Img variant="top" src={foto} />
									<Card.Body>

										<><tr key={karyawan.id}></tr><><Card.Title style={{ fontSize: '15px' }}>{karyawan.nama_kar}</Card.Title></><Card.Title style={{ fontSize: '12px' }}>{karyawan.jabatan}</Card.Title></>

										<Button variant="danger">{karyawan.no_tlp}</Button>
									</Card.Body>
								</Card>
							</Col>
						))}

					</Row>
				</Container></>
	  );

    };
};


export default AdmComp;

