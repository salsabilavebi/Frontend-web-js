import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const NavbarComp = () =>{

    return(
    <div className="Footer">
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
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                                <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                            </ul>
            </div>
            </Col>
            
            <Col className="col-12 col-md-6 col-lg-3">
            <div className="kilimanjaro_part">
                            <h5>Tags Widget</h5>
                            <ul class=" kilimanjaro_widget">
                                <li><a href="#">Classy</a></li>
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">One Page</a></li>
                                <li><a href="#">Multipurpose</a></li>
                                <li><a href="#">Minimal</a></li>
                                <li><a href="#">Classic</a></li>
                                <li><a href="#">Medical</a></li>
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
</div>
    

  );  

};


export default NavbarComp;

