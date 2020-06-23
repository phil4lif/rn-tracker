import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        //make api request to sign up with email and pw

        //if we sign up modify our state and say we are authed

        //if signup fails we need to send error message
    };
}

const signin = (dispatch) => {
    return ({ email, password }) => {
        //try to signin
        //handle success
        //handle failure
    }
}

const signout = (dispatch) => {
    return () => {
        //signout
    }
}
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup},
    { isSignedIn: false}
);