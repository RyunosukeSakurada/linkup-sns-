import { createContext, useReducer, useEffect  } from "react"
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
  // user: JSON.parse(localStorage.getItem("user")) || null,
  user:{
    _id : "6446457e3cadf75adbfe483b",
    fullname: "Ryunosuke Sakurada",
    username:"ronskrd",
    email: "longzhizhu513@gmail.com",
    password:"Longzhizhu513",
    profilePicture: "",
    followers: [],
    followings: [],
    isAdmin: false
  },
  isFetching:false,
  error:false
}

//状態をグローバルに管理する
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