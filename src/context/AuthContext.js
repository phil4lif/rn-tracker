import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data)
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong'})
        }
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
    { isSignedIn: false, errorMessage: '' }
);