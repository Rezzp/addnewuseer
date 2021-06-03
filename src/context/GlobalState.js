import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    users: []
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions    
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        });
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    const deleteUser = (id) => {
        console.log("delete" + id);
        dispatch({
            type: 'DELETE-USER',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{ user: state.users, addUser, editUser, deleteUser }}>
            {props.children}
        </GlobalContext.Provider>
    );

}