import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";


const Header=()=>{
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user)
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in,
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse");
                
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
                
            }
        });
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
    }
    return(
        <div className=" absolute px-20 bg-gradient-to-b from-black bg z-10 w-full flex justify-between">
            <img 
            className="w-44 p-3"
            src={LOGO_URL}
            alt="logo"/>
           { user &&<div>
            <button className=" text-white font-bold p-5 cursor-pointer" onClick={handleSignOut}>(Sign Out)</button>
           </div>
            }
        </div>
        
    )
}
export default Header; 