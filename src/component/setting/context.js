import React ,{createContext,useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {

return(
    <Socketcontext.Provider value={{


    }}>
{children}
    </Socketcontext.Provider>
  
)

}



export {Mycontext , Socketcontext}