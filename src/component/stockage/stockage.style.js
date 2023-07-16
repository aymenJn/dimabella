import styled from "@emotion/styled";

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Fasthand&family=Freehand&display=swap');
</style>
export const Maincontainer = styled.div`
min-height : 100vh  ; 

background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
display : flex ;
justify-content : center ; 
align-items : center ; 
flex-direction : column ; 

`

export const cardhaler = styled.div`
display : flex ; 
justify-content : space-evenly ; 
width : 100% ; 
flex-wrap : wrap ; 
margin : 50px ; 


`
export const card = styled.div`
min-width : 300px ; 
min-height : 400px ; 
margin-top : 40px ; 

margin-left : 40px ; 

border-radius : 20px ; 
display : flex ; 
justify-content : center ; 
align-items : center ; 
box-shadow : 20px 20px 50px rgba(0,0,0,.5) ;
flex-direction : column ; 
font-size : 2rem ;
`
export const title = styled.div`
font-family: 'Dancing Script', cursive;
 
margin-bottom : 30px ; 
`
export const title1 = styled.div`
font-family: 'Dancing Script', cursive;

`

export const input = styled.input`
margin-top  : 40px ; 
font-size : 2rem ;
width  : 50% ; 
padding : 10px ; 

`
export const button = styled.button`
margin-top  : 40px ; 
font-size : 1.5rem ; 
padding : 10px ; 
border-radius : 20px ; 
margin-bottom : 40px ; 
`