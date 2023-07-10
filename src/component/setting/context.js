import React ,{createContext, useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {
  
const [modellist,setmodellist] = useState()
return(
    <Socketcontext.Provider value={{
        modellist,setmodellist
    }}>
{children}
    </Socketcontext.Provider>
  
)

}



export {Mycontext , Socketcontext}