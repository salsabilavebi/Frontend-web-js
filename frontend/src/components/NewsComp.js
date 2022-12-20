import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NewsComp = () =>{

    return(
    <div className="news">
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
    </div>
  );  



};

export default NewsComp;

