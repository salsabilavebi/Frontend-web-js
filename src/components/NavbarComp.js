import React from "react";
import {Navbar, Nav, Container, Row, Col, Button} from "react-bootstrap";
import Gallery1 from "../assets/img/kg1.png";
import Gallery2 from "../assets/img/kg2.png";
import Gallery3 from "../assets/img/kg3.png";
import Gallery4 from "../assets/img/kg4.png";
import Gallery5 from "../assets/img/kg5.png";
import Gallery7 from "../assets/img/kg7.png";
import Gallery8 from "../assets/img/kg8.png";
import Gallery9 from "../assets/img/kg.png";
import Team1 from "../assets/img/Image 2.png";
import Team2 from "../assets/img/Image 3.png";
import Team3 from "../assets/img/Image 4.png";
import Team4 from "../assets/img/Image 6.png";
import Team5 from "../assets/img/Image 7.png";
import Team7 from "../assets/img/Image 8.png";
import Team8 from "../assets/img/Image 9.png";
import Team9 from "../assets/img/Image 10.png";
import Team10 from "../assets/img/Image 11.png";
import Team11 from "../assets/img/img1.png";
import Team12 from "../assets/img/img2.png";
import Team13 from "../assets/img/img3.png";
import Team14 from "../assets/img/img4.png";
import Team15 from "../assets/img/img5.png";
import Team16 from "../assets/img/img6.png";
import Team17 from "../assets/img/img7.png";
import pd1 from "../assets/img/npk.png";
import pd2 from "../assets/img/urea.png";
import pupuk from "../assets/img/pupuk.png";
import logo from "../assets/img/Logo.png";
import fajar from "../assets/img/fajar.png";
import dimas from "../assets/img/Dimas.png";
import sidarta from "../assets/img/sidarta.png";
import dicky from "../assets/img/foto.png";
const NavbarComp = () =>{

    return(
    <><><><><><><><><div className="Navbar">
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
      </div><div className="hero min-vh-100 ">
          <Container>
            <Row>
              <Col className="text-white text-center">
                <h1> We are Providing</h1>
                <h1>Best Business</h1>
                <h1>Services</h1>
                <h3>AVIV AHMAD F</h3>
                <h3>VP SALES REGION 3A</h3>
              </Col>
            </Row>
          </Container>
        </div></><div className="avp"><center>
          <Container>
            <Row>
              <Col>
                <img
                  alt=""
                  src={logo}
                  width="400"
                  height="400"
                  className="d-inline-block align-top" />
                <Container>
                  <Button variant="danger">OUR TEAM</Button>{' '}
                  <Button href="jabar" variant="outline-dark" className="m-2">Jawa Barat</Button>
                  <Button href="/" variant="outline-dark" className="m-2">Banten</Button>
                  <Button href="/" variant="outline-dark" className="m-2">DKI Jakarta</Button>
                </Container>
                <Container>
                  <Row className="mt-5">
                    <Col>
                      <img
                        alt=""
                        src={fajar}
                        width="100"
                        height="100"
                        className="d-inline-block align-top" />
                      <center>
                        <h5>
                          <p>AVP  Wilayah Jabar 1</p>
                          <p> Fajar </p>
                        </h5>
                        <h7>
                          <p> Subang </p>
                          <p> Indramayu </p>
                          <p> Karawang </p>
                          <p> Kab. Cirebon </p>
                          <p> Kota Cirebon</p>
                        </h7>
                      </center>
                    </Col>
                    <Col>
                      <img
                        alt=""
                        src={sidarta}
                        width="100"
                        height="100"
                        className="d-inline-block align-top" />
                      <center>
                        <h5>
                          <p>AVP  Wilayah Jabar 2</p>
                          <p> Sidarta </p>
                        </h5>
                        <h7>
                          <p> Kab Bandung </p>
                          <p> Kota Bandung </p>
                          <p> Kab Bandung Barat </p>
                          <p> Kota Cimahi </p>
                          <p> Cianjur</p>
                          <p> Bogor</p>
                          <p> Sukabumi</p>
                          <p> Kota Depok</p>
                          <p> Bekasi</p>
                          <p> Kota Bekasi</p>
                          <p> DKI Jakarta</p>
                        </h7>
                      </center>
                    </Col>
                    <Col>
                      <img
                        alt=""
                        src={dimas}
                        width="100"
                        height="100"
                        className="d-inline-block align-top" />

                      <center>
                        <h5>
                          <p>AVP  Wilayah Jabar 3</p>
                          <p> Dimas S</p>
                        </h5>
                        <h7>
                          <p> Sumedang </p>
                          <p> Garut </p>
                          <p> Kota Tasikmalaya </p>
                          <p> Ciamis </p>
                          <p> Pangandaran</p>
                          <p> Kota Banjar</p>
                          <p> Majalengka</p>
                          <p> Kuningan</p>
                        </h7>
                      </center>
                    </Col>
                    <Col>
                      <img
                        alt=""
                        src={dicky}
                        width="100"
                        height="100"
                        className="d-inline-block align-top" />
                      <center>
                        <h5>
                          <p>AVP  Wilayah Banten</p>
                          <p> Dicky</p>
                        </h5>
                        <h7>
                          <p> Tangerang </p>
                          <p> Kota Tangerang </p>
                          <p> Kota Tangerang Selatan</p>
                          <p> Serang </p>
                          <p> Lebak</p>
                          <p> Pandeglang</p>
                        </h7>
                      </center>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
          </center>

        </div></><div className="galery min-vh-100">
          <Container>
            <h1>KEGIATAN</h1>
            <p>Kunjungan kerja, Demplot, Rapat Koordinasi yang kami lakukan adalah upaya </p>
            <p>kami memperbaiki diri demi kepuasan kepada para pelanggan</p>
            <Row className="g-2">
              <Col mt-2>
                <img src={Gallery1} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery2} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery3} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery4} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery5} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery7} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery8} alt="pupuk" />
              </Col>
              <Col mt-2>
                <img src={Gallery9} alt="pupuk" />
              </Col>
            </Row>
          </Container>
        </div></><div className="Team">
          <center>
            <Container className="min-vh-100">
              <h1> OUR TEAM </h1>
              <p>Team Administrasi dan lapangan yang siap membantu 24/7 </p>
              <Row className="g-0">
                <Col className="col-ml-20">
                  <img src={Team1} alt="pupuk" />
                </Col>
                <Col className="col-ml-2">
                  <img src={Team2} alt="pupuk" />
                </Col>
                <Col className="g-2">
                  <img src={Team3} alt="pupuk" />
                </Col>
                <Col className="g-2">
                  <img src={Team4} alt="pupuk" />
                </Col>
                <Col className="g-2">
                  <img src={Team5} alt="pupuk" />
                </Col>
              </Row>
              <Row className="g-0">
                <Col>
                  <img src={Team7} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team8} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team9} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team10} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team11} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team12} alt="pupuk" />
                </Col>
              </Row>
              <Row className="g-0">
                <Col >
                  <img src={Team13} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team14} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team15} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team16} alt="pupuk" />
                </Col>
                <Col>
                  <img src={Team17} alt="pupuk" />
                </Col>

              </Row>
              <div>
              <Button href="/admlist">Explore</Button>
              </div>
            </Container>
          </center>
        </div></>
        <div className="testimoni">
          <Container>
            <Row>
              <Col>
                <h5>TESTIMONI</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quaerat voluptatibus ipsum blanditiis nemo ullam esse ipsam molestias sint, aliquam ab natus saepe doloremque, consectetur possimus porro debitis magnam dolore!</p>
              </Col>
              <Col className="text-center py-5 px-3 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
              <Col className="text-center py-5 px-3 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
              <Col className="text-center py-5 px-3 ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
            </Row>
          </Container>
        </div></><div className="product">
          <Container>
            <Row>
              <h1>Pupuk Bersubsidi</h1>
              <p>Menurut Permentan jenis pupuk bersubsidi di bagi menjadi dua jenis</p>
              <Col className="pd">
                <img src={pd1} alt="pupuk" />
                <div className="content">
                  <h3>NPK</h3>
                </div>
              </Col>
              <Col className="pd2 ">
                <img src={pd2} alt="pupuk" />
                <div className="content">
                  <h3>Urea</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div></><div className="news">
          <Container>

            <Row>
              <h2>Latest News</h2>
              <p>Berita di media yang berhubungan dengan kami</p>
              <Col className="text-center py-5 px-3 ">
                <h5>Kelangkaan pupuk di wilayah jombang.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
              <Col className="text-center py-5 px-3 ">
                <h5>Kelangkaan pupuk di wilayah jombang.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
              <Col className="text-center py-5 px-3 ">
                <h5>Kelangkaan pupuk di wilayah jombang.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam quibusdam non odio voluptatem provident excepturi earum explicabo nesciunt nihil debitis dignissimos itaque ipsa, soluta, neque laboriosam aliquid sit eos!</p>
              </Col>
            </Row>
          </Container>
        </div></><div className="Footer">
          <Container>

            <Row>
              <Col className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>About Us</h5>
                  <p>It includes rich features & contents. It's designed & developed based on One Page/ Multi-page Layout,blog themes,world press themes and blogspot. You can use any layout from any demo anywhere.</p>
                  <p>webblogoverflow is completely creative, clean & 100% responsive website. Put your business into next level with Webublogoverflow.</p>
                </div>
              </Col>
              <Col className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part ">
                  <h5>Social Links</h5>
                  <ul class="kilimanjaro_social_links">
                    <li><a href="/"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                    <li><a href="/"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                    <li><a href="/"><i class="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                    <li><a href="/"><i class="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                    <li><a href="/"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                  </ul>
                </div>
              </Col>

              <Col className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>Tags Widget</h5>
                  <ul class=" kilimanjaro_widget">
                    <li><a href="/">Classy</a></li>
                    <li><a href="/">Creative</a></li>
                    <li><a href="/">One Page</a></li>
                    <li><a href="/">Multipurpose</a></li>
                    <li><a href="/">Minimal</a></li>
                    <li><a href="/">Classic</a></li>
                    <li><a href="/">Medical</a></li>
                  </ul>
                </div>
              </Col>
              <Col className="col-12 col-md-6 col-lg-3">
                <div className="kilimanjaro_part">
                  <h5>Quick Contact</h5>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Phone:</h5>
                    <p>+255 789 54 50 40  </p>
                  </div>
                  <div className="kilimanjaro_single_contact_info">
                    <h5>Email:</h5>
                    <p>support@webblogoverflow.com </p>
                  </div>
                </div>
              </Col>
            </Row>

          </Container>
        </div></>
  );  
};

export default NavbarComp;

