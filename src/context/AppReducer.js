const AppReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_USER': {
            return (
                { ...state, users: [action.payload, ...state.users] }
            )
        }

        case 'EDIT_USER': {
            const updatedUser = action.payload;

            const newUpdatedUser = state.users.map((user) => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                else {

                    return user;
                }
            })
            return ({
                ...state,
                users: newUpdatedUser

            })


        }

        case 'DELETE-USER': {
            return (
                { ...state, users: state.users.filter(user => user.id !== action.payload) }
            );
        }


        default:
            return state;
    }

}
export default AppReducer;