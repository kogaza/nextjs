import Head from 'next/head'
import Image from 'next/image'
import toast from 'react-hot-toast'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
   <div>
     <button onClick={() => toast.success("hello toast!")}>
       Toast Success
     </button>
     {/* <button onClick={() => toast.loading("hello toast!")}>
       Toast Loading
     </button> */}
     <button onClick={() => toast.error("hello toast!")}>
       Toast Error
     </button>
    </div>
  )
}
