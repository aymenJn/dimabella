import React from 'react'

import * as s from './input.style'

export const Input = (props) =>{
let data = props.props
console.log("test" ,data)
    return(
        <s.wrapper>
            <s.inputdata>
                <s.input required type={data.type} id = {data.id} />

               
                <s.label>
                    {data.name}
                </s.label>
            </s.inputdata>
        </s.wrapper>
    )
}