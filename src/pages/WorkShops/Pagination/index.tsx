import React,{useState,useEffect} from 'react'
import styles from "./index.module.scss";
import axios from "axios";

//conponents
import {CardData} from '../../../components'
//Api
const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
const Pagination :React.FC=():JSX.Element => {
// State
	const [dataA,setDataA] =useState('Hello')
	const [dataPokemon,setDatapokemon]=useState<any>(null)

	useEffect(()=>{
		axios.get(pokemonData).then((res) => {
			// console.log('pokemon  Data',res.data.results)
			setDatapokemon(res.data.results)
			// res.data.results.map((e:any)=>console.log('name',e.name))
		})
	},[])

	//todo ข้อมูล 10 จำนวน
	//todo perpage
	//? จำนวนเลขหน้า = ข้อมูลทั้งหมด / จำนวนรายการแต่ละหน้า
	//? 10 รายการ 10/5 = 2 หน้า
	const pagination=() => {
		const perpageList = 5 //แสดง 5 รายการต่อ 1 หน้า
		const pages = dataPokemon && Math.ceil(dataPokemon.length / perpageList)
		console.log('numPage',pages)
		const newList = Array.from({length:pages},(data,index)=>{
			const start = index * perpageList // [0] ,[1-5]
			return dataPokemon.slice(start,start+perpageList)
			// console.log()
		})
			console.log('new List', newList)
		
	}
	useEffect(() => {
		
		pagination()
	},[dataPokemon])
return(
	<>
		 <div>
				<h1>{dataA}</h1>
				<div className={styles.cardWrapper}>
				{dataPokemon?dataPokemon.map((element:any,index:number)=><CardData name={element.name} image={element.url} />):''}
				</div>
				
		 </div>
	</>
	)
}
export default Pagination