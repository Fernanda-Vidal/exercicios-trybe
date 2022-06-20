export const LOGIN_SAVED = 'LOGIN_SAVED';
export const REGISTER = 'REGISTER';
export const DELETE = 'DELETE';

export const newAction = (value) => ({
    type: LOGIN_SAVED,
    value,
});

export const registerClient = (value) => ({
    type: REGISTER,
    value,
});

export const deleteClient = (value) => ({
    type: DELETE,
    value,
})

