import React from 'react';
import styles from './button.module.css';
import { Link } from 'react-router-dom';

export default function Button({ content, style, id, onClick }) {
  return (
  
    <button onClick={() => onClick(id)} className={style === "active" ? styles.active : styles.deactive}>
      {content}
    </button>
    
  );
}
