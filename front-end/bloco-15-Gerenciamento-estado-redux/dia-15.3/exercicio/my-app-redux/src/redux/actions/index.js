export const LOGIN_SAVED = 'LOGIN_SAVED';
export const REGISTER = 'REGISTER';

export const newAction = (value) => ({
    type: LOGIN_SAVED,
    value,
});

export const registerClient = (value) => ({
    type: REGISTER,
    value,
})


