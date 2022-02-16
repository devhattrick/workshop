import React, { useState } from "react";
import styles from "./index.module.scss";
import { ButtonComponent, ListCard, ModalAlert } from "../../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TodoList: React.FC = (): JSX.Element => {
  const notify = () => toast.success("แก้ไขข้อมูลเรียบร้อย");
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
    } else if (checkEdit && data) {
      console.log('edit indexx', editIndex)
      const result = list.map((item: any, index: number) => {
        if (index === editIndex) {
          return { ...item, title: data }
        }
        return item
      })
      console.log('sl', result)
      setList(result)
      setData('')
      setCheckEdit(false)
      setEditIndex(null)
      notify()
    } else {
      setList([...list, newItem]);
      setData("");
    }

  };

  const itemRemove = (listIndex: any) => {
    const newList = [...list]
    newList.splice(listIndex, 1)
    setList(newList)
  }
  const [checkEdit, setCheckEdit] = useState(false)
  const [editIndex, setEditIndex] = useState<any>(null)

  const itemEdit = (listIndex: number) => {
    console.log('listIndex', listIndex)
    // const editList = [...list]
    setEditIndex(listIndex)
    setCheckEdit(true)
    const searchItem = list.find((item: any, index: number) => index === listIndex)
    setData(searchItem.title)
    console.log('searchItem', searchItem)
  }
  console.log(list);
  console.log('checkEdit', checkEdit);
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className={styles.containerTodoList}>
        <ToastContainer />
        <ModalAlert topic="กรุณากรอกข้อมูล" openModal={openModal} setOpenModal={() => setOpenModal(false)} />
        <p className={styles.textTopic}>Todo List</p>
        <form className={styles.from} onSubmit={submitData}>
          <section className={styles.inputWrapper}>
            {/* {alert.show && } */}
            <input
              type="text"
              className={styles.input}
              onChange={handleChange}
              value={data}
            />
            {/* <button type="submit" className={styles.btnAdd}>
              Add Data
            </button> */}
            <div className={styles.btnBox}>
              {
                checkEdit ?
                  <ButtonComponent _type="submit" _text="Edit Item" _isIcon="edit" _variant="contained" _colorBG="warning" _colorText="white" />
                  :
                  <ButtonComponent _type="submit" _text="Add Item" _isIcon="add" _variant="contained" _colorBG="primary" _colorText="white" />
              }
            </div>

          </section>
          <section className={styles.showListWrapper}>
            {list.map((e: any, listIndex: number) => {
              return (
                <div key={listIndex}>
                  <ListCard
                    _text={e.title}
                    _onClickEdit={() => itemEdit(listIndex)}
                    _onClickDelete={() => {
                      console.log("index", listIndex);
                      itemRemove(listIndex)
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
