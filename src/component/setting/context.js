import React ,{createContext, useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {
const [username, setusername] = useState({})
return(
    <Socketcontext.Provider value={{
        username, setusername

    }}>
{children}
    </Socketcontext.Provider>
  
)

}



export {Mycontext , Socketcontext}