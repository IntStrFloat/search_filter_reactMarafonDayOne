"use client"
import React from "react";
import {names} from '../public/config.json'
import styles from './page.module.css'
import { useState } from "react";

export default function Home ():React.ReactElement<any> {
  const [name,setName] = useState('');
  function check(first: string,second:string):boolean {
    let flag = true;
    let lenght = first.length < second.length ? first.length : second.length;
    for( let i = 0; i < lenght; i++ ) {
      if(first[i] !== second[i]) {
        flag = false;
      }
    }
    return flag;
  }
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <input onChange={(e)=>setName(e.target.value)}  placeholder="Начните вводить имя" type="text" />
        <ul>
          {names.filter((el)=>{
            if(name==='') {
              return el
            } else if (check(name,el)) {
              return el
            }
          }).map((elem)=> {return <li>{elem}</li>})}
        </ul>
      </div>
    </div>
  )
}