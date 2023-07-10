import React , {useContext} from "react";
import * as s from "./stockage.style"
import { Socketcontext } from "../setting/context";
import { Link } from "react-router-dom";
const Stockage = () => {

    const {modellist} = useContext(Socketcontext)
    console.log(modellist)
const listjsx = modellist.map((model)=>{
console.log("test" , model)
    return(
        <s.card>
            <s.title>
            {  model.data.name}
            
            </s.title>
            <s.title1>
                {model.data.pvf}
            </s.title1>
            <s.input type="number" placeholder="quantity" >

            </s.input>
            <s.button>
                enregistre
            </s.button>
        </s.card>
    )
})
console.log("test" , modellist)
    return(
        <s.Maincontainer>
            <s.cardhaler>
                {listjsx}
            </s.cardhaler>
            <Link to = "/final" >

           
            <s.button>
                terminer
            </s.button>
            </Link>
        </s.Maincontainer>
    )
}



export default Stockage