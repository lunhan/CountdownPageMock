import {useState} from 'react';
import note from '../../static/Note.png';
import search from '../../static/search.png';
import trolly from '../../static/trolly.png';
import './search.css';
import {InputGroup, DropdownButton, FormControl, Dropdown, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default function Search(){

    const [price, setPrice] = useState(0.00);
    const [items, setItems] = useState(0);

    return(
        <div className="search">
            <div className="search-input">
                <InputGroup>
                    <DropdownButton
                    as={InputGroup.Prepend}
                    title="Grocery"
                    // TODO: title should be current selection: use map and {}!!
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item href="#">Grocery</Dropdown.Item>
                    <Dropdown.Item href="#">Recipes</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" placeholder="Search Grocery"/>
                    <button type="search" className="search-button"> <img src={search}/></button>
                </InputGroup>
            </div>
                <Button variant="outline-secondary" expand="md"><img src={note}/>Shopping list</Button>{' '}
                <Button variant="outline-secondary" className="items"><img src={trolly}/> <a> {items}items - ${price}</a></Button>{' '}
                <Button variant="outline-secondary" className="checkout">Checkout</Button>{' '}
            </div>

        
    );
}