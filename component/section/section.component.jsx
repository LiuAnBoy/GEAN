import React from 'react'
import PropTypes from 'prop-types'

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }

  render() {
    return (
      <div style={{width: '100%', height: '100vh', backgroundColor: `${this.props.color}`}}>
        123
      </div>
    )
  }
}

Section.propTypes = {
  color: PropTypes.string
}

export default Section