
// const initialState = [{
//   {dataUsers},
//   {isloading},
// }]

const initialState = {
  isLoading: false
}

export function passwordReducer (state = [], action) {
  switch (action.type) {
    case 'PENDING_ADD_PASSWORD':
      return 'pending'
      break;
    case 'SUCCESS_ADD_PASSWORD':
      return [
        ...state,
        action.payload
      ]
    case 'SUCCESS_PASS':
      return [
        ...action.payload
      ]
    default:
      return state
  }
}