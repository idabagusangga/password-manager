import  db  from '../../firestore.js'

export function GET_PASSWORDS () {
  return dispatch => {
    let arr = []
    dispatch(PENDING_GET_PASSWORD())
    db.collection("password").get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          arr.push(doc.data())
        })
        console.log(arr);
        dispatch(SUCCESS_GET_PASSWORD(arr))
      })
  }
}

export function PENDING_GET_PASSWORD () {
  return {
    type: 'PENDING'
  }
}

export function SUCCESS_GET_PASSWORD (params) {
  return {
    type: 'SUCCESS_PASS',
    payload: params
  }
}

export function ERROR_GET_PASSWORD () {
  return {
    type: 'ERROR_PASSWORD'
  }
}

export function ADD_PASSWORD (value) {
  return dispatch => {
    dispatch(PENDING_ADD_PASSWORD())
    db.collection("password").add(value)
      .then(docRef => {
        dispatch(SUCCESS_ADD_PASSWORD(docRef))
      })
      .catch(err => {
        dispatch(FAILED_ADD_PASSWORD(err))
      })
  }
}

function PENDING_ADD_PASSWORD () {
  return {
    type: 'PENDING_ADD_PASSWORD'
  }
}

function FAILED_ADD_PASSWORD (payload) {
  return {
    type: 'FAILED_ADD_PASSWORD',
    payload: payload
  }
}

function SUCCESS_ADD_PASSWORD (payload) {
  return {
    type: 'SUCCESS_ADD_PASSWORD',
    payload: payload
  }
}