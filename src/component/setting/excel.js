import * as Filesaver from 'file-saver'
import XLSX from 'sheetjs-style'
import {Tooltip} from '@mui/material'
import { Button } from 'bootstrap';
const Exportexcel =({exceldata,filename}) =>{
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' ; 
const fileextension = '.xlsx' ; 
const exportToexcel = async ()=>{
    const ws = XLSX.utils.json_to_sheet(exceldata) 
    const wb = {Sheets:{'data' : ws } , SheetNames:['data']} 
    const excelBuffer = XLSX.write(wb,{bookType : 'xlsx' , type : 'array'}); 
 const   data = new Blob([excelBuffer],{type : fileType})
    Filesaver.saveAs(data,filename + fileextension)
}

return(
    <Tooltip title="Excel Export" >
      <button variant='containd' 
      onClick={(e)=> exportToexcel(filename)} color="primary" 
      style={{cursor :"pointer" , fontSize : 14}}
      >
        Excel Export
      </button>
    </Tooltip>
)
}


export default Exportexcel