import React from 'react'
import PropTypes from 'prop-types'

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: 1200,
  position: 'relative',
  margin: '0 auto',
  left: '42%',
}

const CItems = ({ img }) => (
  <div>
    <img src={img} alt='iloom' style={contentStyle} />
  </div>
)

CItems.propTypes = {
  img: PropTypes.object.isRequired,
}

export default CItems
