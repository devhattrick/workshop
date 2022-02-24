import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import axios from "axios";

//Mui
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SickIcon from "@mui/icons-material/Sick";

// Component
import { InputSelect } from "../../../components";
import {DeadIcon} from "../../../images"

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
      const newArrProvince: any = [];
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
          <p>สถานการณ์ COVID-19</p>
          {covidData !== null && selectData !== "" ? (
            covidData

              .filter(
                (covidData: any) => covidData.province.indexOf(selectData) > -1
              )
              .map((e: any) => {
                return (
                  <>
                    <div className={styles.dateBox}>
                      <p className={styles.topicDate}>ข้อมูลวันที่ {e.update_date}</p>
                    </div>
                    {/* <hr /> */}
                    <p className={styles.textProvince}>{e.province}</p>
                    <section className={styles.dataCardWrapper}>
                      <Card
                        style={{
                          backgroundColor: "#ff5252",
                          padding: "10px",
                          width: "250px",
                        }}
                      >
                        <div className={styles.cardCovidData}>
                          <article className={styles.topicWrapper}>
                            <p className={styles.textTopic}>ติดเชื้อรายใหม่</p>
                            <SickIcon style={{ color: "white" }} />
                          </article>

                          <p className={styles.textNumber}>{'+'}{e.new_case}</p>
                        </div>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "#6e4218",
                          padding: "10px",
                          width: "250px",
                        }}
                      >
                        <div className={styles.cardCovidData}>
                          <article className={styles.topicWrapper}>
                            <p className={styles.textTopic}>ผู้ติดเชื้อสะสม</p>
                            <SickIcon style={{ color: "#ffa700" }} />
                          </article>

                          <p className={styles.textNumber}>+{e.total_case}</p>
                        </div>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "#aaaaaa",
                          padding: "10px",
                          width: "250px",
                        }}
                      >
                        <div className={styles.cardCovidData}>
                        <article className={styles.topicWrapper}>
                          <p className={styles.textTopic}>ผู้เสียชีวิตล่าสุด</p>
                          <CoronavirusIcon style={{ color: "#fffff" }}/>
                          </article>
                          <p className={styles.textNumber}>+{e.new_death}</p>
                        </div>
                      </Card>
                      <Card
                        style={{
                          backgroundColor: "#000000",
                          padding: "10px",
                          width: "250px",
                        }}
                      >
                        <div className={styles.cardCovidData}>
                        <article className={styles.topicWrapper}>
                          <p className={styles.textTopic}>ผู้เสียชีวิตสะสม</p>
                          {/* <img src={DeadIcon} alt="" style={{width:'30px',height:'30px'}}  /> */}
                          <CoronavirusIcon style={{ color: "#ffffff" }}/>
                          </article>
                          <p className={styles.textNumber}>+{e.total_death}</p>
                        </div>
                      </Card>
                    </section>
                  </>
                );
              })
          ) : (
            <>
              {" "}
              <Alert severity="warning">กรุณาเลือกจังหวัด</Alert>
            </>
          )}
        </section>
      </div>
    </>
  );
};
export default SearchCovid;
