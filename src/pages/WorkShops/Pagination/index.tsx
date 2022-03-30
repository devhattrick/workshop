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
			console.log('pokemon  Data',res.data.results)
			setDatapokemon(res.data.results)
			// res.data.results.map((e:any)=>console.log('name',e.name))
		})
	},[])

	//todo ข้อมูล 10 จำนวน
	//todo perpage
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