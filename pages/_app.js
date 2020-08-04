import React, { Fragment } from 'react'
import '../styles/globals.css'
import Navbar from '../component/navbar/navbar.component'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
