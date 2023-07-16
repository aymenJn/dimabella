import React ,{createContext, useState} from "react";
const Socketcontext = createContext() ; 
const Mycontext = ({children}) => {
  
const [modellist,setmodellist] = useState()
const [chart , setchart] = useState()
return(
    <Socketcontext.Provider value ={{
        modellist,setmodellist ,chart , setchart
    }}>
{children}
    </Socketcontext.Provider>
  
)

}



export {Mycontext , Socketcontext}