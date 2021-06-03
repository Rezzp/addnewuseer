import React, { useContext, useEffect, useState } from 'react';
import styles from '../components/Styling.module.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';
import {
    Form,
    Button
} from 'react-bootstrap';

export const EditUser = (props) => {

    const { user, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });

    useEffect(() => {
        const currUserId = currentUserId;
        const selectedUser = user.find(user => user.id === Number(currUserId));
        setSelectedUser(selectedUser);
    }, [currentUserId, user])


    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, name: e.target.value });
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push("/");
    }


    return (
        <Form >
            <h1 className={styles.headers}>Edit User</h1>
            <Form.Group>
                <Form.Control
                    type="text"
                    value={selectedUser.name}
                    onChange={onChange}>
                </Form.Control>
            </Form.Group>
            <Button onClick={onSubmitHandler}>Update</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
