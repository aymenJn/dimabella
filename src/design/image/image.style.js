import styled from "@emotion/styled";


export const section = styled.div`
position : relative ; 
background : url(${p=>p.data})  ; 
background-size : cover ;
width : 200px ; 
height : 100px ; 
margin : 30px 0  ; 
&:before{
    content : '' ; 
    position : absolute ; 
    top : 0 ; 
    left : 0; 
    width : 100%; 
    height : 100% ; 
    background : url (https://www.pngmart.com/files/22/Splash-PNG-Isolated-File.png) ; 
    background-size : 1800px ; 
    background-position : center;  
    mix-blend-mode : screen ;
}
`