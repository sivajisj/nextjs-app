"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);

    signIn("credentials", {
      email,
      password,
    });
  };


  return (
    <div className={styles.container}>
       
       <form onSubmit={handleSubmit} className={styles.form}>
       
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && "Something went wrong!"} */}
        
      </form>

        <button onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login
