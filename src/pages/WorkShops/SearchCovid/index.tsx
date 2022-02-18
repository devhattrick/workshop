import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import axios from "axios";
//Mui
import Card from "@mui/material/Card";
import Alert from '@mui/material/Alert';
// Component
import { InputSelect } from "../../../components";
//Api
const covidDataUrl =
  "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";

const SearchCovid: React.FC = (): JSX.Element => {
  const [covidData, setCovidData] = useState<any>(null);
  const [provinces, setProvinces] = useState<any[]>([]);
  const [selectData, setSelectData] = useState("");
  // const [date,setDate]=useState(new Date())

  useEffect(() => {
    axios.get(covidDataUrl).then((response) => {
      setCovidData(response.data);
      console.log("Res", response.data);
      const newArrProvince: any[] = [];
      response.data.map((e: any) =>
        newArrProvince.push({ label: `${e.province}`, value: `${e.province}` })
      );
      setProvinces(newArrProvince);
    });
  }, []);
  console.log("selectData", selectData);
  return (
    <>
      <div className={styles.containerSearchCovid}>
        <section>
          <InputSelect
            _label="เลือกจังหวัด"
            _textHelper="ข้อมูลของจังหวัด"
            _menuList={provinces}
            _selectData={setSelectData}
            _value={selectData}
          />
        </section>
        <section>
          <Card sx={{ padding: "10px", backgroundColor: "#f0f8ff" }}>
            <p>covidData</p>
            {
            covidData!== null && selectData!== ''
            ?covidData
              .filter(
                (covidData: any) => covidData.province.indexOf(selectData) > -1
              )
              .map((e: any) => {
                
                return (
                  <Card>
                    <p>ข้อมูลณวันที่ {e.update_date}</p>
                    <p>จังหวัด {e.province}</p>
                    <p>ติดเชื้อรายใหม่ : {e.new_case}</p>
                    <p>ติดเชื้อสะสม : {e.total_case}</p>
                    <p>เสียชีวิต : {e.total_death}</p>
                    {/* <p>สาหัส</p> */}
                  </Card>
                );
              })
            :<> <Alert severity="warning">กรุณาเลือกจังหวัด</Alert></>
            }
          </Card>
        </section>
      </div>
    </>
  );
};
export default SearchCovid;
