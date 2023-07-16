import styled from "@emotion/styled";


export const buttonzone = styled.a`

color  : #1670f0;
padding :  30px 60px ; 
font-size : 30px ; 
letter-spacing : 2px ; 
text-transform :  uppercase ; 
text-decoration : none ; 
box-shadow : 0 20 px 50px rgba(0,0,0,.5)  ;
height : 100px ; 
position : relative;  
&:before{
    content : ''; 
    position : absolute ; 
    top : 2px ; 
    left:2px ; 
    bottom : 2px ; 
    width : 50% ; 
    background : rgba(255,255,255,0.05) ;
 }
`
export const span = styled.span`

&:nth-child(1) {
    position : absolute ; 
    top: 0 ; 
    left : 0; 
    width : 100% ; 
    height  : 2px ; 
    background : linear-gradient (to right ,#0c002b , #1779ff) ; 

}

`