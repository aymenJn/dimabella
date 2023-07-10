import styled from "@emotion/styled";

import {  keyframes } from '@emotion/react'

<style>
@import url('https://fonts.googleapis.com/css2?family=Fasthand&display=swap');
</style>
const opacity = keyframes`
0%{
    opacity : 0 ; 

} 
100%{
    opacity : 1 ; 
}
}
`



export const Maincontainer = styled.div`
min-height : 100vh ; 
background-color: #f89b9e;
background-image: linear-gradient(315deg, #f89b9e 0%, #c9d9ff 74%);

display : flex ; 
justify-content : space-evenly ; 
align-items  : center ; 
flex-direction  : column ; 
position : relative ; 
`
export const topsection = styled.div`

width : 100% ;


display : flex ; 
justify-content : space-evenly ; 
align-items  : center ; 
flex-wrap : wrap ; 
`
export const addmodel = styled.button`

background  : none ; 
font-size : 3rem ; 
color : white ; 
padding : 20px ; 
border-radius : 20px ; 
box-shadow : 0 20px 50px rgba(0,0,0,.5) ; 
margin-top : 10px; 

`
export const financial = styled.button`

background  : none ; 
font-size : 3rem ; 
color : white ; 
padding : 20px ; 
border-radius : 20px ; 
margin-top : 10px; 
box-shadow : 0 20px 50px rgba(0,0,0,.5) ; 

`
export const datadisplay = styled.div`
display : flex ; 
justify-content : space-around ;  
align-items : center ; 

flex-wrap  : wrap ;
`
export const card = styled.div `
position : relative ; 
min-height : 300px ; 
width : 300px  ;  
border-radius  : 20px ; 
margin-top  : 40px ; 
margin-right : 40px  ; 
border-radius: 18px;
background: none;
box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
font-family: roboto;
text-align: center;
display : flex  ; 
justify-content : space-around  ; 
align-items : center ; 
flex-direction : column ; 
overflowY : scroll ;
 border-top-left-radius : 50px ; 
 border-top-right-radius : 50px ;
`
export const normaldata = styled.div`
position : relative ; 

width : 300px  ;  
text-align: center;
display : flex  ; 
justify-content : space-around  ; 
align-items : center ; 
flex-direction : column ; 
overflow : hidden ;
animation: ${opacity} 3s ease ;

`
export const title = styled.div`
font-size : 2.5rem ; 

`
export const details = styled.div`
display : flex ; 
justify-content : space-around ; 
align-items : center ; 
flex-direction  : column ; 

`
export const changebutton = styled.button`
background : none ; 
color : #1670f0 ; 
padding : 10px  ; 
font-size : 1.2rem ; 
letter-spacing : 2px ; 
text-transform : uppercase ; 
text-decoration : none ; 
cursor: pointer ; 
box-shadow : 0 20px 50px rgba(0,0,0,.5) ; 
font-family: 'Fasthand', cursive;

`
export const pvf = styled.div`

margin-bottom : 10px ; 

`
export const inputnumber = styled.input`
font-size : 1.3rem ; 
max-width  :130px; 

margin-left : 10px ; 
`
export const img = styled.img `
width : 40px ; 
height : 30px ; 
cursor : pointer ; 

`
export const image = styled.img`

width : 100px ; 
height : 100px ; 
border-radius : 50% ; 
`