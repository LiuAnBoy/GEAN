import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from '../title.component'

import { Section } from '../section.styles'

const Service = ({ color }) => (
  <Section style={{ backgroundColor: color }}>
    <SectionTitle title='SERVICE' subtitle='服務事項' fontcolor='#FDB515' />
  </Section>
)

Service.propTypes = {
  color: PropTypes.string,
}

export default Service
