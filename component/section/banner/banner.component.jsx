import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

import { Section } from '../section.styles'
import { LogoImg } from './banner.styles'

const Banner = ({ color }) => {
  useEffect(() => {
    const options = {
      strings: [
        '<span style="color: #56B688">Designers.</span>',
        '<span style="color: #FDB515">Creators.</span>',
        '<span style="color: #4089DA">Developers.</span>',
        '<span style="color: #f92672">Friends.</span>',
      ],
      typeSpeed: 130,
      backSpeed: 130,
      loop: true,
    }

    const typed = new Typed('.text', options)
  }, [])

  return (
    <Section style={{ backgroundColor: color }}>
      <LogoImg
        src='/geandesignstudio_logo.svg'
        alt='Logo'
        style={{
          width: 220,
          position: 'absolute',
          top: '26%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div
        style={{
          marginTop: 70,
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          textAlign: 'center',
        }}>
        <h1 style={{ display: 'inline', fontSize: '5rem', color: 'white' }}>
          We Are Your{' '}
        </h1>
        <div
          className='text'
          style={{
            display: 'inline',
            fontSize: '5rem',
            fontWeight: 500,
          }}></div>
      </div>
    </Section>
  )
}

Banner.propTypes = {
  color: PropTypes.string,
}

export default Banner
