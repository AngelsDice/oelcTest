import React from 'react';
import styles from './Loader.module.scss';
import loadingIcon from '../../assets/loader.gif';

const Loader = () => (
  <div className={styles.container}>
    <img src={loadingIcon} alt="Loading..." />
  </div>
);

export default Loader;
