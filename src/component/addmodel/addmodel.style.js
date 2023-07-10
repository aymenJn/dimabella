import styled from "@emotion/styled";



export const Maincontainer = styled.div`
min-height : 100vh ; 
background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
display : flex  ; 
justify-content : center ; 
align-items : center ; 
flex-direction : column ; 
color : white ; 

`
export const card = styled.div `
position : relative ; 
min-height : 800px ; 
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
`
export const title = styled.div`
margin-top : 30px ; 
font-size : 2.3rem ; 

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
transition : .5s ; 
pointer-event : none ; 
`
export const inputbox = styled.div`
position : relative ; 
min-width : 300px ; 
margin-top : 35px ; 
margin-left : 40% ; 
`
export const box = styled.div`
height : 70% ; 

position : relative ; 

`
export const sepration = styled.div `
height : 30vh ; 
width : 3px ; 
background : black ; 
position : abosulte : 50% ; 
margin  : 30px 0 ; 
`
export const leftsection = styled.div `
margin  : 0 10px  ; 
height : 100% ; 
max-width  :140px; 
position : absolute;
right : 0 ; 
margin-top : 30px  ; 
dislplay : flex ; 
justify-content  : space-around ; 
align-items : center ; 
flex-direction : colulmn ; 
flex-wrap : wrap  ; 

`
export const rightsection  = styled.div `
margin  : 0 10px  ; 
height : 100% ; 
width  :140px; 
position : absolute;
left : 0 ; 
top : 0 ; 
margin-top : 30px  ; 
dislplay : flex ; 
justify-content  : center ; 
align-items : center ; 
flex-direction : colulmn ; 
flex-wrap : wrap  ; 
`
export const inputnumber = styled.input`
font-size : 1.3rem ; 
max-width  :130px; 
margin : 30px 0 ; 

`
export const bottom = styled.div`
min-height : 250px  ; 
width : 100% ; 

display : flex ; 
justify-content : center ; 
align-items : center ;
margin-top : 50px ; 
flex-direction : column ; 

`
export const inputsubmit   = styled.button`
 
font-size : 2rem ; 
padding : 10px ; 
border-radius  : 20px ; 
`
export const radiohandler = styled.div`

display : flex ; 
justify-content : space-around ; 
align-items :  center ; 
margin-bottom : 20px ; 
`

export const inputimage = styled.input`
color:black ; 
&::before {
    content: 'Select image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;

}
&::-webkit-file-upload-button{
    visibility: hidden;
}
&:hover::before{
    border-color: black;

}
`