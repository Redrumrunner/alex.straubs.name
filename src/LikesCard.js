import React from 'react';
import {Col, Card, CardBody, CardText, CardTitle} from 'reactstrap';
import "./LikesCard.css";

const WHY = "It makes me hoppy!!"

export default function LikesCard({thing="beer", why=WHY}) {
    return (<Col sm={{size:6}} md={{size:4}} lg={{size: 3}} className="padding-bottom">
        <Card>
            <CardBody>
                <CardTitle>I like {thing}!</CardTitle>
                <CardText className="card-text">{why}</CardText>
            </CardBody>
        </Card>
    </Col>);
}