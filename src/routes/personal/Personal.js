import React from 'react';
import styles from "./styles.module.css"
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image4 from "../../images/4.jpg"
import image5 from "../../images/5.jpg"
import image8 from "../../images/8.jpg"
import image9 from "../../images/9.jpg"
import image10 from "../../images/10.jpg"
import image12 from "../../images/12.jpg"


const Personal = () => {
  return (
    <>
      <div className={styles.titleArea}>
        <div className={styles.title}>Personal</div>
      </div>
      <div className={styles.filter}>Latest <i className={`fas fa-chevron-down + ${styles.filterLogo}`}></i></div>
      <div className={styles.gridLayout}>
        <div>
          <img src={image1}/>
        </div>
        <div>
          <img src={image2}/>
        </div>
        <div>
          <img src={image4}/>
        </div>
        <div>
          <img src={image5}/>
        </div>
        <div>
          <img src={image8}/>
        </div>
        <div>
          <img src={image9}/>
        </div>
        <div>
          <img src={image10}/>
        </div>
        <div>
            <img src={image12}/>
        </div>
      </div>
    </>
  )
};

export default Personal;
