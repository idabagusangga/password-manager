
export function userReducer (state = {}, action) {
  switch (action.type) {
    case 'ADD_USER':
    console.log('HAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHA', action.payload);
    return {...action.payload}
    default:
      return state
  }
}