import React,{useState} from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import { ModalAlert,Buttons,ButtonComponent}  from '../../components';


const NameComponent: React.FC = (): JSX.Element => {
  const [open,setOpen] =useState<boolean>(false)
  return (
    
    <>
    <div>
    <ModalAlert openModal={open} topic="กรุณากรอกข้อมูล" setOpenModal={()=>setOpen(false)}/>
    <p>test</p>
    <Buttons _text="Open" _variant="contained" _onClick={()=>setOpen(true)}/>
    <ButtonComponent  _text="Open" _variant="contained" _colorBG="info" _colorText="white" _functionOnClick={()=>setOpen(true)}/>
    </div>
    </>
   
  )
}
export default NameComponent