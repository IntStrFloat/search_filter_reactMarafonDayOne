# Проект на Next.js и React.js

Этот проект использует Next.js и React.js для создания интерактивного веб-приложения, которое позволяет искать и отображать имена в соответствии с заданными критериями.

## Зависимости

Проект использует следующие зависимости:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

## Установка

1. Склонируйте репозиторий на свой компьютер.
2. Убедитесь, что у вас установлен Node.js.
3. В корневой директории проекта выполните следующие команды:( npm install/npm run dev)
## Использование

Этот проект представляет собой веб-приложение, которое позволяет искать и отображать имена в соответствии с заданными критериями.

1. Введите начальные символы имени в поле ввода.
2. Приложение будет отображать имена, которые начинаются с введенных символов.

## Как это работает

Файл `page.module.css` содержит стили для компонента.

Компонент `Home` определен в файле, который использует функциональные компоненты React и хук `useState` для управления состоянием.

Функция `check` выполняет сравнение двух строк, чтобы определить, начинается ли одна строка с другой.

## Пример кода

```jsx
"use client"
import React from "react";
import {names} from '../public/config.json'
import styles from './page.module.css'
import { useState } from "react";

export default function Home ():React.ReactElement<any> {
  const [name,setName] = useState('');
  function check(first: string,second:string):boolean {
    let flag = true;
    let length = first.length < second.length ? first.length : second.length;
    for( let i = 0; i < length; i++ ) {
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
