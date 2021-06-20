import React, { useState } from 'react';
import './shopping.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Side from './side';
import ShoppingPage from './shoppingPage';

export default function Shopping(){
    const [item, setItem] = useState(165);

    return(
        <div>
            <Container fluid className="shoppingpage">
                {/* fluid here is use to make row 100% in container */}
                <Row>
                    <Col xs={12} sm={12} md={2} className="side">
                    <Side/>
                    </Col>
                    <Col xs={12} md={10}>
                    <ShoppingPage/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}