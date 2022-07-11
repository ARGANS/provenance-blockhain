import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NameForm from '../components/nameForm.js'
import { useEffect, useState } from 'react';
import { server } from '../config/config.js';
import {useSSE} from 'use-sse';


export default function Admin() {

  const [myaddress, setMyaddress] = useState('');

  useEffect(() => {
    console.log("In Admin")
    fetch(server + "/api/get/address")
    .then(response => response.json())
    .then(data => {
      setMyaddress(data.address);
    });
  }, [])

  return (
    <div>
      <Head>
        <title>Argans Provenance Proof of Concept</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div><NameForm address={myaddress} readonly={false}/></div>

    </div>
  );
}
