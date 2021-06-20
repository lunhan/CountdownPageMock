import React, { useState } from 'react';
import './shopping.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Items from './items/items';

export default function ShoppingPage(){
    const [item, setItem] = useState(165);

    return(
        <Container fluid className="shoppingpage">
            {/* fluid here is use to make row 100% in container */}
            <Row className="title">
                <h4>Hot Hot Special <a> {item} items</a></h4>  
            </Row>
            <Row className="sort">
            <Col md={9} className="cate d-none d-sm-none d-md-block">
                <DropdownButton id="dropdown-item-button" title="Special&Great Prices" className="cate1">
                    <Dropdown.Item as="checkbox">All</Dropdown.Item>
                    <Dropdown.Item as="button">Special</Dropdown.Item>
                    <Dropdown.Item as="button">Great Prices</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Dietary&Lifestyle" className="cate2">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col md={{ order: 'last' }} className="sort-by">
                <a>Sort by:</a>
                <DropdownButton id="dropdown-item-button" title="Relevnce">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
            </Col>
            </Row>
            <Row className="itempage">
                <Items/>
            </Row>
        </Container>
    
    )
}