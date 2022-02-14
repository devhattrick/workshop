import React,{useState,useEffect} from 'react';
import styles from './index.module.scss'
import axios from 'axios'
// Component
import { InputSelect } from '../../../components'
//Api
const covidDataUrl = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"


const SearchCovid: React.FC = (): JSX.Element => {
  const [covidData,setCovidData]= useState<any>(null)
    const [provinces,setProvinces] =useState<any[]>([])
    // const [date,setDate]=useState(new Date())
    
    useEffect(()=>{
     
        axios.get(covidDataUrl).then((response)=> {
            setCovidData(response.data)
            console.log('Res',response.data)
            const newArrProvince:any[] = []
            response.data.map((e:any)=> newArrProvince.push({label:`${e.province}`, value:`${e.province}`}))
            setProvinces(newArrProvince)
        })
       
    },[])
  return (
    <>
      <div>
        <InputSelect _label="เลือกจังหวัด" _textHelper="ข้อมูลของจังหวัด" _menuList={provinces}/>              
      </div>
    </>
  )
}
export default SearchCovid