import React from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuitemStyle,
  Logo,
  LogoImg,
  HeaderStyle,
  MenuStyle,
} from './navbar.styles.js'

// import LOGO_W from '../../public/logo-w.svg'
// import LOGO_B from '../../public/logo-b.svg'
import './s.scss'

const { Header } = Layout

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: 'white',
      fontColor: 'black',
      logo: '/logo-b.svg',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    // 滾動的高度
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0)
    if (scrollTop > 0) {
      this.setState({
        backgroundColor: 'black',
        fontColor: 'white',
        logo: '/logo-w.svg',
      })
    } else {
      this.setState({
        backgroundColor: 'white',
        fontColor: 'black',
        logo: '/logo-b.svg',
      })
    }
  }

  render() {
    return (
      <Header
        style={{
          ...HeaderStyle,
          backgroundColor: this.state.backgroundColor,
        }}
        className="animation"
      >
        <Logo className="logo">
          <LogoImg src={this.state.logo} alt="logo" />
        </Logo>
        <Menu theme="dark" mode="horizontal" style={MenuStyle}>
          <Menu.Item
            key="1"
            style={{
              ...MenuitemStyle,
              backgroundColor: this.state.backgroundColor,
              color: this.state.fontColor,
            }}
            className="animation"
          >
            <h4 style={{margin: 0}}>巴拉巴拉1</h4>
          </Menu.Item>
          <Menu.Item
            key="2"
            style={{
              ...MenuitemStyle,
              backgroundColor: this.state.backgroundColor,
              color: this.state.fontColor,
            }}
            className="animation"
          >
            <h4 style={{margin: 0}}>巴拉巴拉2</h4>
          </Menu.Item>
          <Menu.Item
            key="3"
            style={{
              ...MenuitemStyle,
              backgroundColor: this.state.backgroundColor,
              color: this.state.fontColor,
            }}
            className="animation"
          >
            <h4 style={{margin: 0}}>巴拉巴拉3</h4>
          </Menu.Item>
          <Menu.Item
            key="4"
            style={{
              ...MenuitemStyle,
              backgroundColor: this.state.backgroundColor,
              color: this.state.fontColor,
            }}
            className="animation"
          >
            <h4 style={{margin: 0}}>巴拉巴拉4</h4>
          </Menu.Item>
          <Menu.Item
            key="5"
            style={{
              ...MenuitemStyle,
              backgroundColor: this.state.backgroundColor,
              color: this.state.fontColor,
            }}
            className="animation"
          >
            <h4 style={{margin: 0}}>巴拉巴拉5</h4>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Navbar
