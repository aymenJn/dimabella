import React , {useState}from "react";
import * as s from "./addmodel.style"
import { useNavigate } from 'react-router-dom'
import { addDoc ,collection ,serverTimestamp} from 'firebase/firestore'
import { db } from "../setting/firebase";
import { storage } from "../setting/firebase";
import { ref, getDownloadURL, uploadBytes  } from "firebase/storage";
const Addmodel = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const [download, downloadurl] = useState();
    const [pdffile , setpdffile] = useState(null)

    const navigate = useNavigate();
    const Senddata = async(data) =>{

        const refclient = collection(db,"stock")
       await addDoc(refclient,{
        data : data,
        creatointime : serverTimestamp()
       })
       .catch(err => {
        alert(err)
       })

      }
      const handepdffileonchange = (e) => {
        let selectedfile = e.target.files[0]
            
            if(selectedfile){
                if(selectedfile){
                   setpdffile(selectedfile)
              


                   if (!selectedfile) return null;
                   const storageRef = ref(storage, `files/${selectedfile.name}`)
                   uploadBytes(storageRef, selectedfile)
                   .then((snapshot) => {
                     
                     getDownloadURL(snapshot.ref).then((downloadURL) => {
                      console.log("test",downloadURL)
                        downloadurl(downloadURL)
                     })
                   })
                
                }
          
            }
        }
            
const onchange = () => {
    let test = true 
   const name = document.getElementById("name")
   const qte = document.getElementById("qte")
   const pvi = document.getElementById("pvi")
   const pvm = document.getElementById("pvm")
   const pvf = document.getElementById("pvf")
   const dinar = document.getElementById("dinar")
   const dollar = document.getElementById("dollar")
   const importe = document.getElementById("import")
   const local = document.getElementById("local")
   const file = document.getElementById("file").value

 console.log("test",pdffile)
  
   let cout = ""
   let loca =""
 if(!dollar.checked && !dinar.checked){
    test = false 
    alert("select option")
 }
 else {
    dollar.checked ? cout = "dollar" : cout ="dinar"

 }
 if(!importe.checked && !local.checked){
    test = false 
    alert("select option")
 }
 else {
    importe.checked ? loca = "importe" : loca ="local"

 }

  if(name.value.length === 0) {
    name.placeholder = "empty"
   
     test = false 
  }
   if(qte.value.length === 0) {
    name.placeholder = "empty"
     test = false 
  }
   if (pvi.value.length ===0) {
    name.placeholder = "empty"
     test = false 
  }
   if (pvm.value.length ===0) {
    name.placeholder = "empty"
     test = false 
  }
   if (pvf.value.length ===0) {
    name.placeholder = "empty"
    test = false 
  }
  if(test) {
    const  data = {name :name.value ,quantity : qte.value , pvi : pvi.value  , pvm : pvm.value , pvf : pvf.value , loca : loca  , cout  : cout,dowload:download}
    Senddata(data)
    navigate("/follow")
  }
 

}
return(
    <s.Maincontainer>
       <s.card>
        <s.title>
            ajoute un model 
        </s.title>
        <s.inputbox>
    
    <s.inputField  type ="text" required="required" id ="name" />
    <s.username>nom de model</s.username>
    <s.i></s.i>
     </s.inputbox>
   
     <s.box>



     <s.leftsection>  
        <s.inputimage  type="file" id="file" accept=".png, .jpg, .jpeg" onChange={handepdffileonchange}  />
        <s.inputnumber type="number" placeholder="qte" id="qte"/>

      

            <s.inputnumber type="number" placeholder="pvi" id ="pvi" />

</s.leftsection>
    <s.sepration>
    </s.sepration>
    <s.rightsection>
    <s.inputnumber type="number" placeholder="pvm" id="pvm" />

<s.inputnumber type="number"placeholder="re"/>
    <s.inputnumber type="number" placeholder="pvf" id ="pvf" />
    </s.rightsection>
    </s.box>
    <s.bottom >
        <s.radiohandler>
        <input type="radio" value="$" name ="cte" style={{marginRight :"10px"}}id ="dollar" />
<label for="dollar" style={{marginRight :"20px"}}>dollar</label>
<input type="radio" value="$" name ="cte" id ="dinar"  />
<label for="dinar">dinar</label>
        </s.radiohandler>
        <s.radiohandler>
        <input type="radio" value="$" name ="importe"style={{marginRight :"10px"}} id ="import"  />
<label for="dollar" style={{marginRight :"20px"}} >import </label>
<input type="radio" value="$" name ="importe"id ="local"   />
<label for="dinar">local</label>
        </s.radiohandler>

  <s.inputsubmit onClick={()=>{onchange()}} >
  enrgistre
  </s.inputsubmit>
    </s.bottom>
        </s.card>
    </s.Maincontainer>
)


}
export default Addmodel 