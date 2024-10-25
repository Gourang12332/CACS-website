import React from "react";
import styles from './Teamcard.module.css'; 

export const Teamcard = (props) => {
  return (
    <div className={styles.cards}> 
      <div className={styles.inner}>
        <div className={styles.front}> 
          <div className={styles.left}> 
            <p>{props.para}</p>
          </div>
          <div className={styles.right}> 
            <img src={props.imgsrc} alt="" style={{borderRadius : "10px"}} />
          </div>
        </div>
        <div className={styles.back}> 
          <div className={styles.description}>
            <p style={{fontSize : "larger"}}>
            {props.description}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
