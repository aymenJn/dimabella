import styled from "@emotion/styled";



export const Maincontainer = styled.div`
min-height : 100vh ;

background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
display : flex ;
justify-content : center ; 
align-items : center ; 

`
export const card = styled.div `
position  : relative ; 
width : 280px ; 
min-height : 400px ; 
margin  : 30px ; 
box-shadow : 20px 20px 50px rgba(0,0,0,.5) ;
border-radius : 15px ; 
background : rgba(255,255,255,.1) ; 
overflow : hidden ; 
display : flex ; 
justify-content   : center ; 
align-items  : center ; 
border-top : 1px solid rgba(255,255,255,.5) ;
border-left : 1px solid rgba(255,255,255,.5) ;
backdrop-filter : blur (5px) ; 

`
export const content    = styled.div`
text-align : center  ; 
display : flex ; 
justify-content : space-around  ;
align-items : center ; 
flex-direction : column ; 

`
export const item = styled.div`
margin-top : 20px ; 
`