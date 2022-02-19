import React from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import { ModalAlert } from '../../components';

interface Props {
    _text: string
   _onClick:any
   _variant: "text" | "outlined" | "contained";
}

const Buttons: React.FC<Props> = (props:Props): JSX.Element => {
  return (
    
    <Button variant={props._variant} onClick={()=>props._onClick()}><span>{props._text}</span></Button>
   
  )
}
export default Buttons