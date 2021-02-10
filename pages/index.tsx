import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader';
import toast from 'react-hot-toast'

import React from "react";

export default function Home() {
  return (
    <div>
      {/*<Loader show={true} />*/}
      <button onClick={() => toast.success("Fuck yeah! Toast!")}>
        Butter me boy!
      </button>
    </div>
  )
}
