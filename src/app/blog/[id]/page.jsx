import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Post = async({params}) => {
  const data =await getData(params.id)
  return (

   
    <div className={styles.container}>

  
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>
          {data.body} </p>
        <div className={styles.author}>
          <Image
            src="/apps.jpg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>{data.title}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
         src="/apps.jpg"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt fugit cumque
         voluptate laboriosam voluptas eligendi 
         reprehenderit ducimus esse ipsum in? Odit
          voluptatibus sequi nisi obcaecati,
           qui id culpa accusamus velit explicabo sed ratione sint ea,
        voluptatum veniam voluptatem ipsum.
      </p>
    </div>
  </div>
  )
}

export default Post
