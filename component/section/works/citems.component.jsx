import React from 'react'
import PropTypes from 'prop-types'

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: 800,
  position: 'relative',
  margin: '0 auto',
  left: '46%',
}

const CItems = ({ img }) => (
  <div>
    <img src={img} alt='iloom' style={contentStyle} />
  </div>
)

CItems.propTypes = {
  img: PropTypes.object,
}

export default CItems
