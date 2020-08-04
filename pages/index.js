import React, { Fragment } from 'react'
import Section from '../component/section/section.component'

import Navbar from '../component/navbar/navbar.component'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        {/* <Navbar /> */}

        <Section color='#ffb3b3'/>
        <Section color='#b3ccff'/>

      </Fragment>
    )
  }
}

export default LandingPage
