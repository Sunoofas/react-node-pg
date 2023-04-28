export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';

export const memberloginReq = (email, password)=>({
    type: LOGIN_REQUEST,
    payload: {email, password},
});

export const memberlogSuccess =()=>({
    type:LOGIN_SUCCESS,

});

export const memberlogFail =()=>({
    type:LOGIN_FAILURE,
});