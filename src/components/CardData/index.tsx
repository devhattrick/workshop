import { style } from "@mui/system";
import React, { useState,useEffect } from "react";
import styles from "./index.module.scss";

interface Props {
    name: string;
    image?: string
    index?:number
}
const CardData: React.FC<Props> = (props:Props): JSX.Element => {
// console.log('props pagination',props)
  return (
    <div className={styles.container}>
        <section className={styles.imageContainer}>
            <img className={styles.image} src={props.image} alt="pokemon"/>
            {/* <p>{props.index+1}</p> */}
        </section>
        <section>
            <p className={styles.textName}>{props.name}</p>
        </section>
    </div>
  );
};
export default CardData;
