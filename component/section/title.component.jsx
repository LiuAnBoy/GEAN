import React from 'react'
import PropTypes from 'prop-types'

import './title.styles.scss'

const SectionTitle = ({ title, subtitle, fontcolor }) => (
  <div className='title'>
    <h2 style={{color: fontcolor}}>{title}</h2>
    <h3 style={{color: fontcolor}}>{subtitle}</h3>
  </div>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  fontcolor: PropTypes.string
}

export default SectionTitle
