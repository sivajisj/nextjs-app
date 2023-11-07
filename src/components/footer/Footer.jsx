import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

function Footer() {
  console.log("hello");
  return (
    <div className={styles.container}>
      <div>2023. All rights reserved.</div>
      <div className={styles.socialIcons}>
        <Image src="/1.png" className={styles.icon} height={20} width={20} alt="facebook" />
        <Image src="/2.png" className={styles.icon} height={20} width={20} alt="instagram" />
        <Image src="/3.jpg" className={styles.icon} height={20} width={20} alt="X" />
     
        <Image src="/4.png" className={styles.icon} height={20} width={20} alt="youtube" />
      </div>
    </div>
  )
}

export default Footer
