// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
 
// Configure Firebase.
const config = {
  apiKey: 'AIzaSyDuTnA-75pFlOWdM4JiF-Y6sqG4LId9uG0',
  authDomain: 'sputnik-v-33a54.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
 
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ]
};
 
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}