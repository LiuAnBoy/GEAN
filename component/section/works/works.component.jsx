import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'antd'
import { Section } from '../section.styles'

import SectionTitle from '../title.component'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: 1000
}

const Works = ({ color }) => (
  <Section style={{ backgroundColor: color }}>
    <SectionTitle title="WORKS" subtitle="實作案例" />
    <div>
      <Carousel autoplay  centerMode={true} slidesToShow='1'>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  </Section>
)

Works.propTypes = {
  color: PropTypes.string,
}

export default Works
