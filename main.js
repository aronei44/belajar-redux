const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    value: 1
} // Inisialisasi value awal

// reducer
const rootReducer= (state = initialState, action)=> {
    if(action.type === 'ADD_VALUE'){
        return {
            ...state,
            value : state.value +1 
        }
    }
    return state
} // fungsi untuk merubah isi value awal



// Store
const store = createStore(rootReducer); // membuat store
console.log(store.getState());


// Subscription
store.subscribe(()=>{
    console.log('berubah')
}) // fungsi yang otomatis dijalankan jika value berubah



// Dispatching ACtion
store.dispatch({type: "ADD_VALUE"}) // memanggil fungsi reducer untuk merubah value
console.log(store.getState());


