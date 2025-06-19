import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Delay of 1.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []); // Empty dependency array means this effect runs once after initial render

  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <div className={styles.preloaderWrapper}>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Preloader;
