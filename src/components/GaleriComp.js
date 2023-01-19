import React from "react";
import { Card,   Col, Row, Container, Navbar, Nav,} from "react-bootstrap";
import pupuk from "../assets/img/pupuk.png";
import foto from "../assets/img/foto.png";

class GaleriComp extends React.Component {

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
						{galeris.map((galeri) => (

							<Col>
								<Card style={{ width: '13rem' }}>
									<Card.Img variant="top" src={foto} />
									<Card.Body>

										<><tr key={galeri.id}></tr><><Card.Title style={{ fontSize: '15px' }}>{galeri.judul_kegiatan}</Card.Title></></>

                                        <Card.Link href="/">Selengkapnya</Card.Link>
									</Card.Body>
								</Card>
							</Col>
						))}

					</Row>
				</Container></>
	  );

    };
};


export default GaleriComp;

