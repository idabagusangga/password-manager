import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/home'
import Edit from './components/Edit'
import logo from './logo.svg';
import './App.css';
import store from './store/index'
import { Provider } from 'react-redux'
import { Layout, Menu, Icon } from 'antd'
const { Sider, Footer, Content } = Layout;


class App extends Component {
  constructor () {
    super ()
    this.state = {
      collapsed: false
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Provider store = { store }>    
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="lock" />
                <span className="nav-text">Passwords</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="key" />
                <span className="nav-text">Add Password</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">Logout</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <div className="App">
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React Password Manager</h1>
                <BrowserRouter>
                <div>
                  <Route exact path="/" component={Home}></Route>
                  <Route path='/edit/:name' component={Edit}></Route>
                </div>

                </BrowserRouter>
              </div>
            </Content>
            </div>
            <Footer style={{ textAlign: 'center' }}>
              React Password Manager @idabagusangga
            </Footer>
          </Layout>
        </Layout>
     </Provider>
    );
  }
}

export default App;
