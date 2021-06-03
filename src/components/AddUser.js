import React, { useContext, useState } from 'react';
import styles from '../components/Styling.module.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';

import {
    Form,
    Button
} from 'react-bootstrap';

export const AddUser = () => {

    const { addUser } = useContext(GlobalContext);
    const [user, setUser] = useState('');
    const history = useHistory();


    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Math.floor(Math.random() * 100000000),
            name: user
        }
        addUser(newUser);
        history.push("/");
    }

    return (
        <Form onSubmit={onSubmit}>
            <h1 className={styles.headers}>Add New User</h1>
            <Form.Group>
                <Form.Label>Enter the user name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={user} onChange={(e) => setUser(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type="submit" variant="warning" >Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
