import React from 'react'
import styles from "./page.module.css"
import Button from '@components/Button/Button';
import Image from 'next/image';
import {items} from './data.js';
import { notFound } from 'next/navigation';

const getData = (category) =>{
  const data = items[category]
  if(data) {
    return data
  }
  return notFound


}


const Category = ({params}) => {
  const data = getData(params.category)


  return (

    <div className={styles.container}>
      
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map(item =>(

        <div className={styles.item} key={item.id} >
             <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text='See More' url='/#' />
             
             </div>
             <div className={styles.imgContainer}>
             <Image fill={true}
     className={styles.img} alt='bird'  src={item.image} />
              </div>
        </div>
    ))}
    </div>
  )
}

export default Category