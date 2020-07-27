import React, { Fragment } from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../component/navbar/navbar.component'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <Navbar />
  }
}

export default LandingPage
