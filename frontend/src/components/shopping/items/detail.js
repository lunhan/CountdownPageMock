import React, { useState } from 'react';
import './detail.css';
import pic from '../../../static/product.png';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Detail(){

    const [items] = useState([
        {
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '00'
        },
    ]);

    return(
        <div>

        </div>
    );
}