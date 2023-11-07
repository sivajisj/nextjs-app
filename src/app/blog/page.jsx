import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Blog() {
  return (
    <div className={styles.mainContainer}>
           <Link href="/blog/testId" className={styles.container}>
               <div className={styles.imageContainer}>
                <Image src="/apps.jpg"
                   alt=''
                   width={300}
                   height={200}
                   className={styles.image}/>

               </div>

               <div className={styles.content}>
                <h1 className={styles.title}>text</h1>
                <p className={styles.desc}>desc</p>
               </div>
           </Link>
           <Link href="/blog/testId" className={styles.container}>
               <div className={styles.imageContainer}>
                <Image src="/apps.jpg"
                   alt=''
                   width={300}
                   height={200}
                   className={styles.image}/>

               </div>

               <div className={styles.content}>
                <h1 className={styles.title}>text</h1>
                <p className={styles.desc}>desc</p>
               </div>
           </Link>
           <Link href="/blog/testId" className={styles.container}>
               <div className={styles.imageContainer}>
                <Image src="/apps.jpg"
                   alt=''
                   width={300}
                   height={200}
                   className={styles.image}/>

               </div>

               <div className={styles.content}>
                <h1 className={styles.title}>text</h1>
                <p className={styles.desc}>desc</p>
               </div>
           </Link>
           <Link href="/blog/testId" className={styles.container}>
               <div className={styles.imageContainer}>
                <Image src="/apps.jpg"
                   alt=''
                   width={300}
                   height={200}
                   className={styles.image}/>

               </div>

               <div className={styles.content}>
                <h1 className={styles.title}>text</h1>
                <p className={styles.desc}>desc</p>
               </div>
           </Link>

    </div>
  )
}

export default Blog
