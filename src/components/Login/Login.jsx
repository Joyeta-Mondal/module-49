import { useState } from "react";
import auth from "../firebase/firebase.init.js";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  //   google login
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };
  // github login
  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with Github</button>
        </>
      )}
      {user && (
        <div>
          <div>
            <h4>Welcome {user.displayName}!</h4>
            <p>Logged mail : {user.email}</p>
          </div>
          <img src={user.photoURL} alt="" />
        </div>
      )}
      {!user && (
        <div>
          <h4>Signed Out!</h4>
          <p>Please Login.</p>
        </div>
      )}
    </div>
  );
};

export default Login;
