import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navhead = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Team Members</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end mr-4">
                <Link className="btn btn-primary" to="/add">Add User</Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
