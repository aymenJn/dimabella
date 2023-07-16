import React , {useContext} from "react";
import * as s from "./stockage.style"
import { Socketcontext } from "../setting/context";
import { Link } from "react-router-dom";
import { Input } from "../../design/input/input";
import { Button } from "bootstrap";
import { Image } from "../../design/image/image";
const Stockage = () => {

    const {modellist, setchart} = useContext(Socketcontext)
  const Add = (data) => {
const quantity = document.getElementById(data.name).value
alert(quantity)
  }
const listjsx = modellist.map((model)=>{

    return(
        <s.card>
            <Image props ={model.data.dowload} />
            <s.title>
            {  model.data.name}
            
            </s.title>
            <s.title1 >
                {model.data.pvf}
            </s.title1>
            <Input props = {{name:"quantity " , type : "number"  , id : model.data.name }}  />
            <button onClick={()=> Add(model.data)}>
                SAVE
            </button>

            
        </s.card>
    )
})

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