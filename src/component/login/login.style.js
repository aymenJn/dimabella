import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

const animate = keyframes`
0%{
transform : rotate(0deg) ;
}
100%{
    transform : rotate(360deg) ;
}

`
export const Maincontainer = styled.div`

display : flex ;  
justify-content : center ; 
align-items : center ; 
min-height : 100vh ; 
background : #23242a;
`



export const box = styled.div`
position : relative ; 
min-width : 70%; 
min-height : 420px ; 
background : #1c1c1c; 
border-radius : 8px ; 
overflow : hidden ; 
&:before {
    position : absolute ; 
    content : "" ; 
    top : -50% ; 
    left : -50% ; 
    min-width : 400px ; 
    transform-origin : bottom right ; 
    min-height : 420px ; 
    background : linear-gradient(0deg , transparent , transparent , #45f3ff ,  #45f3ff, #45f3ff ) ; 
    z-index :  1 ;
    animation : ${animate} 6s linear infinite ; 


}
&:after {
    position : absolute ; 
    content : "" ; 
    top : -50% ; 
    left : -50% ; 
    min-width : 400px ; 
    transform-origin : bottom right ; 
    min-height : 420px ; 
    background : linear-gradient(0deg , transparent , transparent , #45f3ff ,  #45f3ff, #45f3ff ) ; 
    z-index :  1 ;
    animation : ${animate} 6s linear infinite ; 
    animation-delay : -3s ; 
}

`
export const borderline = styled.span`
position : absolute ; 
top : 0; 
inset : 0; 
&:before {
    position : absolute ; 
    content : "" ; 
    top : -50% ; 
    left : -50% ; 
    min-width : 400px ; 
    transform-origin : bottom right ; 
    min-height : 420px ; 
    background : linear-gradient(0deg , transparent , transparent , #ff2770 ,  #ff2770, #ff2770 ) ; 
    z-index :  1 ;
    animation : ${animate} 6s linear infinite ; 
    animation-delay : -1.5s ; 
}
&:after {
    position : absolute ; 
    content : "" ; 
    top : -50% ; 
    left : -50% ; 
    min-width : 400px ; 
    transform-origin : bottom right ; 
    min-height : 420px ; 
    background : linear-gradient(0deg , transparent , transparent , #ff2770 ,  #ff2770, #ff2770 ) ; 
    z-index :  1 ;
    animation : ${animate} 6s linear infinite ; 
    animation-delay : -4.5s ; 
}

`

export const Form = styled.form`
position : absolute ; 
inset : 4px ; 
background : #222;
padding : 50px 40px ; 
border-radius : 8px ; 
z-index : 2 ; 
display : flex ; 
flex-direction : column ; 

`
export const signTitle = styled.h2`
color : #fff ;
font-weight : 500; 
text-align : center ; 
letter-spacing : 0.1em ;
`
export const inputbox = styled.div`
position : relative ; 
min-width : 300px ; 
margin-top : 35px ; 
`
export const inputField = styled.input`
position : relative ; 
width : 70% ; 
 
padding : 20px 10px 10px ; 
background : transparent ; 
outline : none ; 
box-shadow : none ; 
border  :none ; 
color : #222; 
font-size  : 1em ; 
letter-spacing : 0.05em ; 
transition : .5s ; 
z-index : 10 ; 
&:valid  ~span , &:focus ~ span{
    color :#fff;
    font-size : 0.75em ; 
    transform  : translateY(-34px);
}
&:valid  ~i , &:focus ~ i{
    height : 44px ; 

}
`
export const username = styled.span`
position : absolute ; 
left : 0 ; 
padding : 20px 0px 10px ; 
pointer-event  : none ; 
color : #8f8f8f ; 
font-size  : 1em ; 
letter-spacing : 0.05em ; 
transition : .5s ; 
`
export const i = styled.i`
position : absolute ; 
left : 0; 
bottom : 0; 
width : 55% ; 
height : 5px ; 
background : #fff ; 
border-radius : 4px ; 
overflow : hidden ; 
transition : .5s ; 
pointer-event : none ; 
`
export const inputsubmit   = styled.input`
border : none ; 
outline ! none ; 
padding : 9px 25px ; 
background : #fff; 
margin-top : 30px ; 
cursor : pointer ; 
font-size : 0.9em ; 
bodrder-radius: 4px ; 
font-wieght : 600 ; 
width : 100px ; 
border-radius : 5px ; 
&:active {
    opacity :.8 ; 
}

`
