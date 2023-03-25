import styled from "@emotion/styled";



export const Maincontainer = styled.div`
display : flex ; 
justify-content : center ; 
align-items : center ; 
min-height : 100vh ; 
overflow : hidden ;  


`
export const container = styled.div`
position : relative ; 
width : 100%; 
display : flex ; 
flex-wrap : wrap ; 
overflow : hidden ;  
min-hieght : 80vh ;
margin-left : 20% ; 
`
export const card = styled.div`
position  : relative ; 
width : 30% ; 
min-height : 80vh; 

transition : 0.5s ; 
margin: 2% ; 
&:before {
    content : '' ; 
    position : absolute ; 
    top : -15px ; 
    left : 0; 
    width : 100% ; 
    height  : 15px  ; 
    background : #00c0f6; 
    transform-origin : bottom ; 
    transform : skewX(45deg) ; 
    transition : 0.5s ; 
}
&:after {
    content : '' ; 
    position : absolute ; 
    top : -15px ; 
    left : -15px; 
    width : 15px; 
    height  : 50%  ; 
    background : #00c0f6; 
    transform-origin : left ; 
    transform : skewY(45deg) ; 
    transition : 0.5s ; 
    border-bottom : 250px solid  #d9d9d9 ;
}
&:hover{
    transform : translateY(-40px) ; 
}
`
export const imgBoc = styled.div`
position : relative ; 
border-raduis : 20px ; 
width : 100% ; 
height : 40% ; 
background : #00c7ff ; 
display : flex ; 
justify-content : center ; 
align-items : center ; 
flex-direction : column ; 

`
export const img = styled.img`
width : 20% ; 
hieght : 10% ; 

`
export const title = styled.h3`
position : relative ; 
color : #fff;
maring-top : 10px ; 
`
export const content = styled.div`
background : #f3f3f3;
position : relative ; 
width : 90% ; 
height : 200px ; 
padding : 5% ; 
color : #777; 
text-align : center ; 

`
