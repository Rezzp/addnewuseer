import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    Button
} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';


export const UserList = () => {

    const { user, deleteUser } = useContext(GlobalContext)

    return (
        < ListGroup className="mt-4" >
            {user.length > 0 ? (
                <>
                    {user.map(user => (
                        <ListGroup.Item className="d-flex" key={user.id}>
                            <strong>
                                {user.name}
                            </strong>
                            <div className="ml-auto">
                                <Link className="btn btn-warning mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                <Button className="btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </>
            ) :
                (<h4 className={"text-center"}>No Users</h4>)
            }
        </ListGroup >
    )
}
