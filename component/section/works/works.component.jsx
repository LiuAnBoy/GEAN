import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'antd'
import { Section } from '../section.styles'

import SectionTitle from '../title.component'
import CItems from './citems.component'

import data from '../../../data/works.json'

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: 1200,
  position: 'relative',
  margin: '0 auto',
  left: '80%',
}

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: 400,
  slidesToShow: 1,
  speed: 300,
}

const carousel = {
  position: 'relative',
  top: '13%',
}

//TODO: Render Carousel option

const Works = ({ color }) => (
  <Section style={{ backgroundColor: color }}>
    <SectionTitle title="WORKS" subtitle="實作案例" />
    <div style={carousel}>
      <Carousel autoplay {...settings}>
        {/* {data.works
          .filter(work => work.id <= 3)
          .map((work, i) => {
            <CItems key={work.id} img={work.img} />
            // console.log(work.id)
          })} */}
        {/* <CItems img={`${data.works[0].img}`} /> */}
        <div>
          <CItems img={`${data.works[0].img}`} />
        </div>
        <div>
          {/* <img
            src="/geandesignstudio_project-iloom.jpg"
            alt="iloom"
            style={contentStyle}
          /> */}
          <CItems img={`${data.works[0].img}`} />
        </div>
        <div>
          {/* <img
            src="/geandesignstudio_project-iloom.jpg"
            alt="iloom"
            style={contentStyle}
          /> */}
          <CItems img={`${data.works[0].img}`} />
        </div>
      </Carousel>
    </div>
  </Section>
)

Works.propTypes = {
  color: PropTypes.string,
}

export default Works
