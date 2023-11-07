import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


function Blog() {
  return (
    <div className={styles.container}>
     <Image 
     width={350} height={300} alt='bird' src='https://images.pexels.com/photos/7425308/pexels-photo-7425308.jpeg?auto=compress&cs=tinysrgb&w=600' />
    </div>
  )
}

export default Blog
