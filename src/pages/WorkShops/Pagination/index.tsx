import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import axios from "axios";
import MenuData from './menuData'

//conponents
import { CardData } from "../../../components";

//Api
const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

const Pagination: React.FC = (): JSX.Element => {
  //* State
//   const [dataA, setDataA] = useState("Hello");
  const [dataList, setDataList] = useState<any>(MenuData); //* data from api
  const [dataInPage, setDataInPage] = useState<any>([]); //* list in page
  const [page,setPage] = useState(0) //* page
  console.log('isPage',page)

//   useEffect(() => {
//     axios.get(pokemonData).then((res) => {
//       // console.log('pokemon  Data',res.data.results)
//       setDatapokemon(res.data.results);
//       // res.data.results.map((e:any)=>console.log('name',e.name))
//     });
//   }, []);

  //todo ข้อมูล 10 จำนวน
  //todo perpage
  //? จำนวนเลขหน้า = ข้อมูลทั้งหมด / จำนวนรายการแต่ละหน้า
  //? 10 รายการ 10/5 = 2 หน้า
  const pagination = () => {
    const perpageList = 5; //แสดง 5 รายการต่อ 1 หน้า
    const pages = MenuData && Math.ceil(MenuData.length / perpageList);

    //* แบ่งช่วงข้อมูล
    const newList = Array.from({ length: pages }, (data, index) => {
      const start = index * perpageList; // [0] ,[1-5]
      return MenuData.slice(start, start + perpageList);
    });
    return newList;
  };

  //* set เลข หน้า
  const handlePage =(index:any) => {
	setPage(index)
}
  useEffect(() => {
    const paginate = pagination()
    setDataInPage(paginate)
	setDataList(paginate[page])
  }, [page]);


console.log('dataList',MenuData)
  return (
    <>
      <div>
        {/* <h1>{dataA}</h1> */}
        <div className={styles.cardWrapper}>
          {dataList &&
            dataList.map((element: any, index: number) => (
              <CardData name={element.name} image={element.image_url} />
            ))}
        </div>
		<br />
        <div className={styles.paginationContainer}>
          {dataInPage.map((data: any, index: number) => {
            return (
              <button key={index} className={`${index === page?styles.paginationButtonActive:styles.paginationButton}`} onClick={()=>handlePage(index)}>
                <p className={styles.textBtnNumber}> {index + 1}</p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Pagination;
