import {useState} from 'react';
import truck from '../../static/truck.png';
import './search.css';
import {InputGroup, DropdownButton, FormControl, Dropdown, Button} from 'react-bootstrap';

export default function Search(){

    const [address, setAddress] = useState('CBD');

    return(
        <div className="delivery">
            <img src={truck}/><span>Delivery: {address}</span>
        </div>
    );
}