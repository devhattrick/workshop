import React,{useState,useEffect} from 'react';
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Component
import { InputSelect } from '../../components'
import axios from 'axios'



const covidDataUrl = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

const Demo: React.FC = ():JSX.Element =>{
    const [covidData,setCovidData]= useState<any>(null)
    const [provinces,setProvinces] =useState<any[]>([])
    const [date,setDate]=useState(new Date())
    const navigate = useNavigate();
    useEffect(()=>{
     
        axios.get(covidDataUrl).then((response)=> {
            setCovidData(response.data)
            console.log('Res',response.data)
            const newArrProvince:any[] = []
            response.data.map((e:any)=> newArrProvince.push({label:`${e.province}`, value:`${e.province}`}))
            setProvinces(newArrProvince)
        })
       
    },[])
    return(
        <>
            <div className={styles.container}>
                <nav>
                    <p className={styles.text}>Demo</p>
                </nav>
                <section>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography><p>รายงานสถานการณ์ COVID-19 ประจำวัน แยกตามรายจังหวัด</p></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <InputSelect _label="เลือกจังหวัด" _textHelper="ข้อมูลของจังหวัด" _menuList={provinces}/>
                            </Typography>
                        </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography><p>Accordion 2</p></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                </section>
                <footer>
                    <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
                </footer>
            </div>
        </>
    )
}
export default Demo