import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import './Card.css'

class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <Card inverse>
                    <CardImg width="100%" src="https://images.unsplash.com/photo-1542834759-4db91f2574d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <CardImgOverlay>
                        <CardTitle>Card Title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        <Form>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input type="text" name="name" id="username" placeholder="Username" />
                                <Button>Submit</Button>
                            </FormGroup>
                            <ListGroup>
                                <ListGroupItem>Cras justo odio</ListGroupItem>
                                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            </ListGroup>
                        </Form>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    }
}

export default Cards