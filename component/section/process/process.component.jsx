import React from 'react'
import { Section } from '../section.styles'
import PropTypes from 'prop-types'

import SectionTitle from '../title.component'

const Process = ({ color }) => (
  <Section style={{ backgroundColor: color }}>
    <SectionTitle title='PROCESS' subtitle='設計流程' fontcolor='black' />
  </Section>
)

Process.propTypes = {
  color: PropTypes.string,
}

export default Process
