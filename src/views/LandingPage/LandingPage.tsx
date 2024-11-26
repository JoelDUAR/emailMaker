import styles from './LandingPage.module.css';
import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landingPage}>
      <div className={`${styles.split} ${styles.left}`}>
        <div className={styles.content}>
          <div className={styles.card} onClick={() => navigate("/listEmails")}>
            <h1>Listar Emails</h1>
          </div>
        </div>
      </div>
      <div className={`${styles.split} ${styles.right}`}>
        <div className={styles.content}>
          <div className={styles.card} onClick={() => navigate("/emailMaker")}>
            <h1>Email Maker</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
