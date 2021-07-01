import React, { useState } from 'react';
import './items.css';
import pic from '../../../static/product.png';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Shopping(){
    const [price, setPrice] = useState(16);
    const [oldPrice, setOldPrice] = useState(16);
    const [name, setName] = useState('Butter');
    const [weight, setWeight] = useState(500);
    const [desc, setDesc] = useState(0);
    const [qut, setQut] = useState(0);
    const [unit, setUnit] = useState('g');

    //setUseHistory here
    const history = useHistory();

    const [items] = useState([
        {
            id:1,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '00'
        },
        {
            id:2,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '00'
        },
        {
            id:3,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '00'
        },
        {
            id:4,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '50'

        },
        {
            id:5,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:6,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:7,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:8,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:9,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:10,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:11,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:12,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:13,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:14,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
        {
            id:15,
            photo:{pic},
            name:'Butter',
            weight:500,
            desc:(price/weight)*100,
            qut: 100,
            unit: 'g',
            price1: '16',
            price2: '49'
        },
    ]);

    //this function will direct page to path/deatil
    function goDeatils() {
        history.push('/detail');
      }


    function descInfo(price, weight){
        if (weight > 100) {
            var result = (price/weight)*100;
            return result;
            setQut(100);
        }
        else{
            return ((price/weight)*100);
            setQut(1);
        }

    }

    return(
        <div className="page">
            <ul className="ulStyle">
                {items.map((item, index) =>
                    <Card  className="card col-sm-12" key={index} onClick={e => goDeatils()}>
                        <Card.Img variant="top" src={pic} />
                        <div className="body">
                        <Card.Body>
                            <Card.Text>
                            {item.name}
                            </Card.Text>
                            <Card.Text>
                            {item.weight}{item.unit} {item.desc}per {item.qut}{item.unit}
                            </Card.Text>
                            <Card.Text className="price">
                                <div className="price1">
                                ${item.price1}
                                </div>
                                <div className="price2">
                                {item.price2}
                                </div>

                            </Card.Text>
                        </Card.Body>
                        </div>
                        
                        <div className="button">
                            <Button variant="primary green">Add to trolley</Button>
                        </div>
                    
                    </Card>
                )}
            </ul>

        </div>
    );
}