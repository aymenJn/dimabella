import React from "react";

import * as s from './button.style'

export const Button = (props) => {
let data = props.props
const Addtochart = () =>{
    alert(data.name)
}
    return(
        <s.buttonzone href="#" onClick={() => Addtochart()} >
            <s.span>
            </s.span>
            <s.span>
            </s.span>
            <s.span>
            </s.span>
            {data}
        </s.buttonzone>
    )
}
export const Button1 = () => {
    return(
        <div>
            
        </div>
    )
}