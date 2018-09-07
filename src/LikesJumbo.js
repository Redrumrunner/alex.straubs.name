import React from 'react';
import {Jumbotron} from 'reactstrap';

const WHY = "He is the best!";
export default function({thing="Braden", why=WHY}) {
    return (
        <Jumbotron>
            <h1>{thing}</h1>
            <p className="lead">{why}</p>
        </Jumbotron>
    );
}