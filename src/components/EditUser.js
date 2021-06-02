import React from 'react';
import styles from '../components/Styling.module.css';
import { Link } from 'react-router-dom';
import {
    Form,
    Button
} from 'react-bootstrap';

export const EditUser = () => {
    return (
        <Form>
            <h1 className={styles.headers}>Edit User</h1>
            <Form.Group>
                <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Button>Update</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
