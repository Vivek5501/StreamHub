import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidate } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
// import Browse from "./Browse";
// import { LOGO_URL } from "../utils/constants";
import { BG_IMG } from "../utils/constants";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();  

  const [isSign, setisSign] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);

    seterrorMessage(message);

    if (message) return;

    //Sign In/Sign Up logic

    if (!isSign) {
      // sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        //   navigate("/");
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

        //   console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toogleSignIn = () => {
    setisSign(!isSign);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className=" font-bold py-4 text-3xl">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            type="text"
            placeholder="Username"
            className="p-3 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <p className=" text-red-600 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-xl hover:delay-200 ease-out"
          onClick={handleButtonClick}
        >
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 cursor-pointer hover:underline"
          onClick={toogleSignIn}
        >
          {isSign
            ? "New to StreamHub? Sign Up"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
