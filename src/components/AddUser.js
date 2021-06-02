import React from 'react';
import styles from '../components/Styling.module.css';
import { Link } from 'react-router-dom';
import {
    Form,
    Button
} from 'react-bootstrap';

export const AddUser = () => {
    return (
        <Form>
            <h1 className={styles.headers}>Add New User</h1>
            <Form.Group>
                <Form.Label>Enter the useer name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"></Form.Control>

            </Form.Group>
            <Button type="submit" variant="warning">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
