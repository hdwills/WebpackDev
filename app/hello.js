import React, {Component} from 'react';
import config from './config.json';
import styles from './hello.css';

class Hello extends Component {
  render() {
    return (
      <div className={styles.hello}>
        {config.helloText}
      </div>
    );
  }
}

export default Hello