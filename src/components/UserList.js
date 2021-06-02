import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    Button
} from 'react-bootstrap';

export const UserList = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroup.Item className="d-flex">
                <strong>User Name</strong>
                <div className="ml-auto">
                    <Link className="btn btn-warning mr-2" to="/edit:id">Edit</Link>
                    <Button className="btn-danger mr-2">Delete</Button>
                </div>
            </ListGroup.Item>
        </ListGroup>

    )
}
