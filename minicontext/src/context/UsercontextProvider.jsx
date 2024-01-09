import React from "react";
import UserContext from "./Usercontext";

const UsercontextProvider=({children})=>{
    const [user,setuser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
       {children}
        </UserContext.Provider>
    )

}
export default UsercontextProvider