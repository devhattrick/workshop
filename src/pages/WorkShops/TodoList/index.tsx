import React,{useState} from 'react'
import styles from './index.module.scss'


const TodoList: React.FC = (): JSX.Element => {
  const [data,setData]= useState('')
  const [list,setList]=useState<any[]>([])
  const handleChange=(e:any)=>{
    setData(e.target.value)
  }
  const submitData=(e:any)=>{
      e.preventDefault()
      console.log('data',data)
      const newItem = {
        
        title:data,
      }
      setList([...list,newItem])
      setData('')
  }

  return (
    <>
      <div className={styles.containerTodoList}>
        <p className={styles.textTopic}>Todo List {data}</p>
        <form className={styles.from} onSubmit={submitData}>
          <section className={styles.inputWrapper}>
            <input type="text" className={styles.input} onChange={handleChange}
              value={data}/>
            <button type="submit" className={styles.btnAdd}>Add Data</button>
          </section>
          <section className={styles.showList}></section>
        </form>
      </div>
    </>
  )
}
export default TodoList