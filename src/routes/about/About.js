import React from 'react';
import styles from "./styles.module.css"
import image13 from "../../images/13.PNG"
import image14 from "../../images/14.jpg"
import image15 from "../../images/15.jpg"
import image16 from "../../images/16.jpg"
import image17 from "../../images/17.PNG"

const About = () => {
  return (
    <>
      <div className={styles.gridLayout}>
            <div className={styles.itemText}>
                <div className={styles.title}>About Me</div>
            </div>
            <div className={styles.itemPhoto}>
                <img src={image13}/>
            </div>
        </div>
        <div className={styles.someText}>
            Arutrum eu, convallis sit amet lacus. Duis enim velit, congue a semper a, hendrerit eget orci. 
            Nulla massa nibh, condimentum eget sollicitudin vel, ornare a erat. Curabitur tincidunt tellus 
            ac dui pellentesque luctus. Etiam ut aliquam augue, quis laoreet mauris. Morbi eu scelerisque orci.
            Proin viverra elementum est at blandit. Quisque cursus et ipsum non fringilla. Nullam justo nisi, 
            vestibulum sit amet nunc vitae, congue sollicitudin urna. Curabitur ac arcu sem. Aliquam ultrices, 
            lectus et placerat viverra, nisl lorem sagittis nibh, et commodo lectus lectus porta eros. Aenean 
            augue ligula, hendrerit id varius a, ultrices sed eros.
        </div>
        <div className={styles.someBigText}>
            Nam nisi magna
        </div>
        <div className={styles.someText}>
            Vehicula nec malesuada vitae, congue ac neque. Nulla tempus vel neque vel ullamcorper. 
            Nunc finibus mauris eget nibh suscipit, quis luctus sapien semper. Pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas.
        </div>
        <div className={styles.gridLayout1}>
            <div>
                <img src={image14}/>
            </div>
            <div>
                <img src={image15}/>
            </div>
            <div>
                <img src={image16}/>
            </div>
        </div>
        <div className={styles.someText}>
            Sed consequat commodo ligula vel tempor. Phasellus id lectus at neque aliquet tristique sed eget purus. 
            Sed pretium felis orci, eu venenatis dolor tristique rutrum. Nunc ac nunc vel libero euismod rhoncus 
            at quis erat. Aliquam fermentum nisi sed accumsan consequat. Sed semper pulvinar volutpat. Mauris eu 
            tristique mauris, quis varius metus. Suspendisse in felis mattis, suscipit est non, maximus dolor. 
            Suspendisse bibendum sit amet felis ac aliquet. 
        </div>
        <div>
            <img src={image17} width="100%"/>
        </div>
        <div className={styles.someText}>
            Pellentesque id molestie libero. Cras congue tortor elit, euismod mollis ex laoreet eu. 
            Phasellus venenatis lorem nisl, eget lobortis libero tempus ac. Quisque venenatis pharetra dolor, 
            at dictum turpis ornare id. Suspendisse vulputate finibus aliquet. Proin et viverra nulla. Mauris 
            consequat gravida luctus.
        </div>
        <div className={styles.someText}>
            Vivamus vel turpis turpis. Nulla pretium consectetur metus, quis finibus ante commodo a. 
            Ut iaculis nec massa ut tincidunt. Nunc ut metus tortor. Donec tristique nisl arcu, 
            ut tristique augue tincidunt sit amet. Nunc fermentum, leo id accumsan vulputate, 
            quam neque malesuada nisl, in tristique urna ipsum at sapien. Morbi cursus dapibus arcu in tempor. 
            Integer consectetur, justo et fringilla eleifend, urna purus blandit enim, eget fermentum ligula 
            nisl at nunc.
        </div>
        <div className={`${styles.someText} + " " + ${styles.noMargin}`}>
            Fusce sed auctor lorem. Morbi ultricies lorem in magna malesuada porttitor. Fusce semper, 
            arcu a vestibulum blandit, metus massa luctus ante, at consectetur enim nisi ac dui. Morbi 
            dapibus diam at orci tristique laoreet. Praesent ut ullamcorper dui, vitae consectetur tortor. 
            Phasellus mollis nisi pretium felis feugiat condimentum. Donec dui libero, interdum sit amet 
            nibh id, mollis pretium augue.
        </div>
    </>
  )
};

export default About;
