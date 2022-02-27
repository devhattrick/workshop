import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Component
import {
  ModalAlert,
  BarChart,
  LineChart,
  PieChart,
  DoughnutChart,
  PolarAreaChart,
  RadarChart,
  BubbleChart,
} from "../../components";
import axios from "axios";
import { CovidBG } from "../../images";
// import PdfFile from '../../file/Ex.pdf'
// import Excel from '../../file/bridgeport_nhood_profile_2018.csv'

const covidDataUrl =
  "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";

const Demo: React.FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [covidData, setCovidData] = useState<any>(null);
  const [provinces, setProvinces] = useState<any[]>([]);
  // const [date, setDate] = useState(new Date())
  const navigate = useNavigate();
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
  const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "none",
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <div className={styles.container}>
        <ModalAlert openModal={openModal} topic="Alert" />
        <nav>
          <p className={styles.text}>Demo</p>
        </nav>
        <section>
        
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <p>Chart 2</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
              <LineChart />
              <hr />
              <BarChart />
              <hr />
              <PieChart />
              <hr />
              <DoughnutChart />
              <hr />
              <PolarAreaChart />
              <hr />
              <RadarChart/>
              <hr />
              <BubbleChart/>
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
          <Button variant="contained" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Down Load
          </Button>
          <a target="_blank" href={CovidBG} download rel="noreferrer">
            s
          </a>
          {/* <Button variant="contained" onClick={() => setOpenModal(true)}>Modal</Button> */}
        </footer>
      </div>
    </>
  );
};
export default Demo;
const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
