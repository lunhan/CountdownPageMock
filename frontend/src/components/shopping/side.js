import React from 'react';
import './shopping.css';
import { Card, Accordion } from 'react-bootstrap';


export default function Side(){
    return(
        //TODO: change defaultActiveKey="0" as 1 when user has small screen
        <Accordion defaultActiveKey="0" className="panel">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Category 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="body">
                    <ul className="menu">
                        <li>Friut & Veg</li>
                        <li>Meat & Seafood</li>
                        <li>Drinks</li>
                        <li>Beer & Wine</li>
                        <li>Pantry</li>
                        <li>Health & Beauty</li>
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}