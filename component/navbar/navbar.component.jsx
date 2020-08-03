import React from 'react'
import { Layout, Menu } from 'antd'

import './navbar.styles.scss'

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

class Navbar extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({ current: e.key })
  }

  render() {
    const { current } = this.state
    return (
      <div style={{ backgroundColor: '#0F1F2E', height: 60 }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            backgroundColor: '#0F1F2E',
            float: 'right',
            color: 'white',
            height: 60,
          }}
        >
          <Menu.Item
            key="mail"
            icon={<MailOutlined />}
            className="Nav-btn"
          >
            Navigation One
          </Menu.Item>
          <Menu.Item
            key="mail"
            icon={<MailOutlined />}
            className="Nav-btn"
          >
            Navigation One
          </Menu.Item>
          <Menu.Item
            key="mail"
            icon={<MailOutlined />}
            className="Nav-btn"
          >
            Navigation One
          </Menu.Item>
          <Menu.Item
            key="mail"
            icon={<MailOutlined />}
            className="Nav-btn"
          >
            Navigation One
          </Menu.Item>
          <Menu.Item
            key="mail"
            icon={<MailOutlined />}
            className="Nav-btn"
          >
            Navigation One
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar