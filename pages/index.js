import React, { Fragment } from 'react'

import Banner from '../component/section/banner/banner.component'
import Works from '../component/section/works/works.component'
import Service from '../component/section/service/service.component'
import Process from '../component/section/process/process.component'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Banner color='#0F1F2E' />
        <Works color='white' />
        <Service color='#0F1F2E' />
        <Process color='white' />
      </Fragment>
    )
  }
}

export default LandingPage
