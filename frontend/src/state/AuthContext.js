import { createContext, useReducer, useEffect  } from "react"
import AuthReducer from "./AuthReducer";

//Define the first user
const initialState = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user:{
    _id : "6446457e3cadf75adbfe483b",
    fullname: "Ryunosuke Sakurada",
    username:"ronskrd",
    email: "longzhizhu513@gmail.com",
    password:"Longzhizhu513",
    profilePicture: "/person/1.jpg",
    followers: [],
    followings: [],
    isAdmin: false
  },
  isFetching:false,
  error:false
}

//manage this state grobally
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ( {children} ) => {
  const [state,dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{
    user: state.user,
    isFetching: state.isFetching ,
    error:state.error,
    dispatch,
  }}>
    {children}
  </AuthContext.Provider>
}