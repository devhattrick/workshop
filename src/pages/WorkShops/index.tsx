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
import { InputSelect } from "../../components";
import SearchCovid from "./SearchCovid";
import TodoList from "./TodoList";
import ChartDATA from "../ChartData";
// import axios from 'axios'

const covidDataUrl =
  "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";

const Demo: React.FC = (): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <nav>
          <p className={styles.text}>Work Shops</p>
        </nav>
        <section>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <p className={styles.textTopicList}>
                  รายงานสถานการณ์ COVID-19 ประจำวัน แยกตามรายจังหวัด
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.covidContainer}>
              <Typography>
                <SearchCovid />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <p className={styles.textTopicList}>Todo List</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TodoList />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <p className={styles.textTopicList}>Data Table</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <ChartDATA /> */}
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
        </footer>
      </div>
    </>
  );
};
export default Demo;
