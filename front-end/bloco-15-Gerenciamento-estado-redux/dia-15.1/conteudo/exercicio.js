const Redux = require('redux');

const atualizaState = (number) => ({
    type: 'MUDA_NUMERO', number
})

estado = {
    numero: 5,
}

const reducer = (state = estado, action ) => {
    switch(action.type) {
        case 'MUDA_NUMERO':
            return {
                ...state,
                numero: action.number,
            }
            default:
            return state;
    }
}

const store = Redux.createStore(reducer);

store.dispatch(atualizaState(26587))

console.log(store.getState());