import React  , {useContext}  from 'react'
import * as s from './financial.style'
import { Socketcontext } from '../setting/context'

const Financial = () => {
    const {modellist} = useContext(Socketcontext)
     let capital = 0 
    let quantity = 0
    let prixventer = 0 
    modellist.forEach((data)=>{
        console.log("test",data.data.quantity)
        capital += data.data.pvi * data.data.quantity
        quantity += Number( data.data.quantity ) 
        prixventer += Number( data.data.pvf ) 
    })

  return (
    <s.Maincontainer>
        <s.card>
            <s.content>
              <s.item>
              capital total : {capital}
              </s.item>
              <s.item>
              quantity total : {quantity}
              </s.item>
              <s.item>
              prix vente finanl : {prixventer}
              </s.item>
         
            </s.content>
            
             </s.card>
    </s.Maincontainer>
  )
}

export default Financial