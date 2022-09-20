import React, { useState } from "react";
import styles from "./index.module.scss";
import { ButtonComponent, ListCard, ModalAlert } from "../../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ListArray: React.FC = (): JSX.Element => {

  const [isValue,setIsvalue] = useState(true)
  const [data, setData] = useState("");
  const [list, setList] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false)
  const [checkEdit, setCheckEdit] = useState(false) //* เช็คปุ่ม Edit
  const [editIndex, setEditIndex] = useState<any>(null) //* index ของ กด Edit


  
  const addList =()=>{
    const newList = list
    newList.push({
      title:data,
      data:[]
    })
    console.log('new list',newList);
    setList([...newList])
  }

  const handleChange = (e: any) => {
    setData(e.target.value);
    console.log('value',e.target.value);
    
    data ==='' || data === null ?setIsvalue(true):setIsvalue(false)
  };

  //todo Click Remove
  // const itemRemove = (listIndex: any) => {
  //   const newList = [...list]
  //   newList.splice(listIndex, 1)
  //   setList(newList)
  // }

  return (
    <>
      <div className={styles.containerTodoList}>
        <input type="text" onChange={handleChange} value={data}/>
        <section>
          {list.map((Ele:any,index:number)=>{
            return (
              <div key={index}>
                <p>
                  {Ele.title}
                </p>
                <p style={{color:"red"}}>
                  {Ele.data.map((e:any)=>e.num)}
                </p>
                <ButtonComponent
                  _text="Add Data"
                  _colorBG="success"
                  _colorText="white"
                  _variant="outlined"
                  
                  _functionOnClick={()=>{
                  const addmini = list
                  addmini[index].data.push({
                    num:data,
                    type:'b'
                    })
                    setList([...addmini])
                    console.log('list',addmini);
                    
                  }}
                />
              </div>
            )
          })}
        </section>
        <section>
          <ButtonComponent
            _disabled = {isValue}
            _text="Add Data"
            _colorBG="gentle"
            _colorText="white"
            _variant="outlined"
            _functionOnClick={()=>addList()}/>
          
        </section>
      </div>
    </>
  );
};
export default ListArray;
