// import { db } from '../../firestore'

// export function GET_USER (params) {
//   return dispatch => {
//     let arr = []
//     db.collection("users").get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//           arr.push(doc.data())
//       });
//       console.log(arr[0].username);
//     });
//   }
// }

export function ADD_USER (params) {
  return {
    type: 'ADD_USER',
    payload: params
  }
}