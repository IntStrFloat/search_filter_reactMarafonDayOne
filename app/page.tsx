"use client"
import React from "react";
import {names} from '../public/config.json'
import styles from './page.module.css'
import { useState } from "react";

export default function Home ():React.ReactElement<any> {
  const [name,setName] = useState('');
  console.log(names)
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <input placeholder="Начните вводить имя" type="text" />
        <ul>
          {names.map((name)=><li>{name}</li>)}
        </ul>
      </div>
    </div>
  )
}