import React from "react";
import styles from "./index.module.scss";

// Component
import {
  // ModalAlert,
  BarChart,
  LineChart,
  PieChart,
  DoughnutChart,
  PolarAreaChart,
  RadarChart,
  BubbleChart,
} from "../../components";

const ChartData: React.FC = (): JSX.Element => {
  return (
    <div className={styles.chartWrapper}>
      <section>
        <p className={styles.topic}>BarChart</p>
        <BarChart />
      </section>
      <section>
        <p className={styles.topic}>LineChart</p>
        <LineChart />
      </section>
      <section>
        <p className={styles.topic}>PieChart</p>

        <PieChart />
      </section>
      <section>
        <p className={styles.topic}>DoughnutChart</p>
        <DoughnutChart />
      </section>
      <section>
        <p className={styles.topic}>PolarAreaChart</p>

        <PolarAreaChart />
      </section>
      <section>
        <p className={styles.topic}>RadarChart</p>

        <RadarChart />
      </section>
      <section>
        <p className={styles.topic}>BubbleChart</p>

        <BubbleChart />
      </section>
    </div>
  );
};
export default ChartData;
