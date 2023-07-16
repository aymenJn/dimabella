import styled from "@emotion/styled";



export const wrapper = styled.div`
width : 90%  ; 
min-height : 80px ; 
padding : 10px ; 
box-shadow   : 0px 0px 10px rgba(0,0,0,0.1) ; 
border-radius : 20px ; 
margin : 20px 0 ;
`
export const inputdata = styled.div`

width : 100% ; 
position : relative ; 
margin : 40px  0 ; 
`
export const input= styled.input`
height : 100% ; 
background : none; 
width : 100% ; 
outline: none;
color : white ; 
padding : 10px 0px ; 
font-size : 1.5rem ; 
border:none ; 
border-bottom : 2px solid silver ; 
transition : all  .3s ease ; 
&:focus ~ label {
    transform : translateY(-20px) ; 
    transition : all  .6s ease ; 

}
&:valid ~ label {
    transform : translateY(-20px) ; 
    transition : all  .6s ease ; 

}

`
export const label = styled.label`
font-size : 1.1rem ; 
position : absolute ; 
bottom : 10px ; 
left : 0  ; 
top : 5px ;
color : gray ; 
pointer-events : none;  
margin-top : 5px ; 
`
export const underline = styled.div`
position : absolute ; 
bottom : 0 ; 
height : 2px ; 
width : 100% ; 


&:before {
    position  : absolute ; 
    content : "" ; 
    height : 100% ; 
    width : 100% ;
    transform : scaleX(0) ; 
    background : #4158d0 ; 

    &:focus   {
        transform : scaleX(1) ; 
    }
    &:valid {
        transform : scaleX(1) ; 
    }
}

`


