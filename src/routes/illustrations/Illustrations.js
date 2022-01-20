import React from 'react';
import styles from "./styles.module.css"
import image3 from "../../images/3.jpg"
import image6 from "../../images/6.jpg"
import image7 from "../../images/7.jpg"
import image11 from "../../images/11.jpg"

const Illustrations = () => {
  return (
    <>
      <div className={styles.titleArea}>
        <div className={styles.title}>Illustrations</div>
      </div>
      <div className={styles.filter}>Latest <i className={`fas fa-chevron-down + " " + ${styles.filterLogo}`}></i></div>
      <div className={styles.gridLayout}>
        <div>
          <img src={image3}/>
        </div>
        <div>
          <img src={image6}/>
        </div>
        <div>
          <img src={image7}/>
        </div>
        <div>
          <img src={image11}/>
        </div>
      </div>
    </>
  ) 
};

export default Illustrations;
