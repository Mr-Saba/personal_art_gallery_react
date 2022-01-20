import React, { useState } from 'react';
import styles from "./styles.module.css"
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"
import image5 from "../../images/5.jpg"
import image6 from "../../images/6.jpg"
import image7 from "../../images/7.jpg"
import image8 from "../../images/8.jpg"
import image9 from "../../images/9.jpg"
import image10 from "../../images/10.jpg"
import image11 from "../../images/11.jpg"
import image12 from "../../images/12.jpg"

const Home = () => {

    const [visible, setVisible ] = useState(false)

    const loadMore = () => {
        setVisible(true)
        
    }

  return (
    <>
        <div className={styles.gridLayout}>
            <div className={styles.bigOne}>
                <img src={image1} />
            </div>
            <div>
                <img src={image2} />
            </div>
            <div>
                <img src={image3} />
            </div>
            <div>
                <img src={image4} />
            </div>
            <div>
                <img src={image5} />
            </div>
            <div>
                <img src={image6} />
            </div>
            { visible ? ( <>
            <div>
                <img src={image7} />
            </div>
            <div>
                <img src={image8} />
            </div>
            <div>
                <img src={image9} />
            </div>
            <div>
                <img src={image10} />
            </div>
            <div>
                <img src={image11} />
            </div>
            <div>
                <img src={image12} />
            </div> </> ) : (<></>)
            }
        </div>
        {visible ? <button onClick={() => loadMore()} className={styles.disabledButton}>LOAD MORE</button>
        : <button onClick={() => loadMore()} className={styles.button}>LOAD MORE</button> }
    </>
)
};
export default Home;
