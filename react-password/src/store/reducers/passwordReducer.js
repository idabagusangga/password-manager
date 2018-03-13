
// const initialState = [{
//   {dataUsers},
//   {isloading},
// }]

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  button: 'Register'
}

export function passwordReducer (state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_PASS':
      return {...state, data: action.payload, isLoading: false, error: false, button: 'Register'}
    case 'PENDING_ADD_PASSWORD':
      return {...state, isLoading: true, error: false, button: 'Register'}
    case 'SUCCESS_ADD_PASSWORD': 
      let newDataState = {...state, isLoading: false, error: false, button: 'Register'}
      newDataState.data = action.payload
      console.log(newDataState);
      return newDataState
    case 'EDIT_PASSWORD_START':
    let newDataForEdit = {...state, isLoading: false, error: false, button: 'Edit'}
      return newDataForEdit
    case 'FILTER_PASSWORD' :
    console.log(action.payload);
      let newData = state.data.filter(record => 
        record.email == action.payload
      )
      console.log(newData);
      return {...state, data: newData,  isLoading: false, error: false, button: 'Register'}
    default:
      return state
  }
}

// export function addPasswordReducer (state = [], action) {
//   switch (action.type) {
//     case 'PENDING_ADD_PASSWORD':
//       return 'pending'
//       break;
//     case 'RESET_ADD_PASSWORD':
//       return action.payload
//     default:
//       return state
// 
//   }
// }
