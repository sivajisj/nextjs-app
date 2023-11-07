import React from 'react'
import Image from "next/image";
import styles from './page.module.css'
import Button from '@components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        <Image
          src='/contact.png'
          fill={true}
          alt=""
          className={styles.image}
        />
        </div>

          <form className={styles.form}>
              <input type="text" placeholder='name' className={styles.input} id="" />
              <input type="email" placeholder='email' className={styles.input} id="" />
              <textarea placeholder='message'
               className={styles.textArea} cols="30" rows="10">

              </textarea>
         <Button url="/#" text="Send"/>

          </form>
      </div>
    
    </div>
  )
}

export default Contact
