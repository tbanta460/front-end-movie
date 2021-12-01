import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {Component} from 'react';

// Compoent
import Header from '../src/component/header'
import Recmovie from '../src/component/recmovie'
import GetData from '../src/component/trends'
import Trailer from '../src/component/videoTrailer'
import Footer from '../src/component/footer'
import BarRight from '../src/component/sideBarRightForMobile/barRight';





export default class Home extends Component {
  
  render(){
    return (
      <>
      <div id="root" className="bg-06 relative">
        <BarRight />
        <header>
          <Header />
        </header>
        <main>
            <Recmovie />
            <GetData />
            <Trailer />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      </>
    )
  }
}
