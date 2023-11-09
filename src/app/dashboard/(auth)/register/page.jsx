"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import bcrypt from "bcrypt"

const Register = () => {
  
    const [error ,setError] =  useState(false)

    const router = useRouter()

  const handleSubmit=async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    console.log(name, email, password)

    try {

      const res = await fetch("api/auth/register",{
         method: "POST",
         headers :{
          "Content-Type":"application/json"
         },
         body :json.stringify({name, email, password})
      })
      
      res.status === 201 && router.push("dashboard/login?success=Account has been created successfully")
    } catch (error) {
      setError(true)
    }

  }
  return (
    <div className={styles.container}>
      
      <form onSubmit={handleSubmit} className={styles.form}>
           <input type='text' className={styles.input1} placeholder='username'  required/>  
           <input type='email' className={styles.input1} placeholder='email'  required/>  
           <input type='password' minLength={8} className={styles.input1} placeholder='password'  required/>  
           <button className={styles.button} >Register</button>
      </form>
      {error && "Something went wrong!"}
     { console.log(error)}
      <Link  href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register
