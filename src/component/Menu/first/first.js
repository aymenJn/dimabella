import React from 'react'
import * as s from "./first.style"
import { Socketcontext } from '../../setting/context'
import { useContext } from 'react'
const   First =() => {
    const {username} = useContext(Socketcontext)
    console.log( username)
  return (
    <s.Maincontainer>

 
    <s.container>

        <s.card>
            <s.imgBoc>
                <s.img src='./kebab.png'/>
                <s.title>ملفوف</s.title>
            </s.imgBoc>
            <s.content>
            ملفوف بنين و مزيان كي الياس
            </s.content>
        </s.card>
        <s.card>
            <s.imgBoc>
                <s.img src='./burger.png'/>
                <s.title>شباتي </s.title>
            </s.imgBoc>
            <s.content>
                شباتي مزيان بالياس البنين
            </s.content>
        </s.card>
    </s.container>
    </s.Maincontainer>
  )
}

export default First