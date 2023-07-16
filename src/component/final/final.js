import React from "react";
import * as s from  "./final.style"
import { Input } from "../../design/input/input";
import { Textarea } from "../../design/textarea/textarea";
import { Button } from "../../design/button/button";
const Final = () => {

    return(
        <s.Maincontainer>
            <s.card>
             <Input props = {{name:"name" , type : "text" }} />
             <Input props = {{name:"phone " , type : "tel" }} />
             <Textarea   /> 
             <Input props = {{name:"remise " , type : "number" }} />
             <Button   props = "save" />
                </s.card> 
        </s.Maincontainer>
    )
}


export default Final 