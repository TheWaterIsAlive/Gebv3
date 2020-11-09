import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


//const uiTypes = {login: 'login', registration: 'registration', loggedin: 'loggedin'};


const getUser = createAsyncThunk("login/truffle", (endpoint, {getState}) =>{


  return fetch(endpoint)
.then(responce => {
  if (!responce.ok) throw Error(responce.statusText);
  return responce.json();
})
.then(json => json);

});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    ethAccount = {
       storageValue: 0, 
       web3: null, 
       accounts: null, 
       contract: null }
},
  reducers: {
  
    [getUser.pending]: state =>{

     
    },
    [getUser.rejected]: state =>{

    },
    [getUser.fulfilled]: state =>{

    }
  }
})

export const {
  getMetaMask

} = loginSlice.actions;
export default loginSlice.reducer;

// export const {
//   nextFlashCard,
//   prevFlashCard,
//   flipFlashCard,
//   createFlashCard,
//   updateFlashCard,
//   deleteFlashCard
// } = flashCards.actions
// export default flashCards.reducer