import React, {useContext} from 'react';
import { Card , Row, CardColumns} from 'react-bootstrap';
import {netWorth} from './Calculations/Calculations';
import {UserContext} from '../../App';

const Assets = () => {

    const userContext = useContext(UserContext); 

    return (
        <div>
            <Row>
            <CardColumns className="ml-3">
                    <Card border="success" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Assets</Card.Title>
                            <Card.Text>
                                <h2>${userContext.assetBalance}</h2>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Net Worth</Card.Title>
                            <Card.Text>
                                <h2>${netWorth(userContext.assetBalance, userContext.debt)} </h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="danger" style={{ width: '15rem' }} className="p-1">
                        <Card.Body>
                            <Card.Title>Debt</Card.Title>
                            <Card.Text>
                                <h2>${userContext.debt}</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                </CardColumns>
            </Row>
        </div>
    )

};

export default Assets;