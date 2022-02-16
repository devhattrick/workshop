import React, { useState } from "react";
import styles from "./index.module.scss";
import { ButtonComponent, ListCard, ModalAlert } from "../../../components";

const TodoList: React.FC = (): JSX.Element => {
  const [data, setData] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [isAlert, setIsAlert] = useState({ show: false, msg: "", type: "" }); //Alert validation
  const handleChange = (e: any) => {
    setData(e.target.value);
  };
  const submitData = (e: any) => {
    e.preventDefault();
    console.log("data", data);
    const newItem = {
      title: data,
    };

    if (data === '') {
      setOpenModal(true)
    }else{
      setList([...list, newItem]);
      setData("");
    }
    
  };

  const itemRemove=(index:any)=>{
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  const itemEdit=()=>{
    const editList =[...list]
  
  }
  console.log(list);
  const [openModal,setOpenModal] =useState(false)

  return (
    <>
      <div className={styles.containerTodoList}>
        <ModalAlert topic="กรุณากรอกข้อมูล" openModal={openModal} setOpenModal={()=>setOpenModal(false)}/>
        <p className={styles.textTopic}>Todo List {data}</p>
        <form className={styles.from} onSubmit={submitData}>
          <section className={styles.inputWrapper}>
            {/* {alert.show && } */}
            <input
              type="text"
              className={styles.input}
              onChange={handleChange}
              value={data}
            />
            <button type="submit" className={styles.btnAdd}>
              Add Data
            </button>
          </section>
          <section className={styles.showListWrapper}>
            {list.map((e: any, index: number) => {
              return (
                <div key={index}>
                  <ListCard
                    _text={e.title}
                    _onClickEdit={()=>itemEdit}
                    _onClickDelete={() => {
                      console.log("index", index);
                      itemRemove(index)
                    }}
                  />
                </div>
              );
            })}
          </section>
        </form>
      </div>
    </>
  );
};
export default TodoList;
