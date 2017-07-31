// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDGJLmuKGoM7uOKFEsMTP_L9gwJCmOQmfE',
  databaseURL: 'https://profitoro-ad0f0.firebaseio.com',
  authDomain: 'profitoro-ad0f0.firebaseapp.com'
}
let firebaseApp = firebase.initializeApp(config)

export default firebaseApp
