import React from 'react'
import PorpTypes from 'prop-types'

import { Section } from '../section.styles'

import SectionTitle from '../title.component'

const Works = ({ color }) => (
  <Section style={{ backgroundColor: color }}>
    <SectionTitle title='WORKS' subtitle='實作案例' />
  </Section>
)

Works.propTypes = {
  color: PorpTypes.string,
}

export default Works
