import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount, render} from 'enzyme'
import Jumbotron from './components/carousel'
import AddModal from './components/AddModal'
import DataTable from './components/Tables'
import AddForm from './components/AddForm'
import store from './store/index'
import Spinner from './components/LoadingSpin'
import { Provider } from 'react-redux'
import { Carousel, Layout } from 'antd'
import { Form, 
        Input, 
        Tooltip, 
        Icon, 
        Cascader, 
        Select, 
        Row, 
        Col, 
        Checkbox, 
        Button, 
        AutoComplete } from 'antd';
import renderer from 'react-test-renderer'
const { Sider, Footer, Content } = Layout;
import { BrowserRouter, Route, Link } from 'react-router-dom'


//testing tambahain sama function testing

Enzyme.configure({
  adapter: new Adapter()
})


describe ('<Home/>', () => {
  it('should render div containing Jumbotron, table, and modal', () => {
    const wrapper = shallow ((
      <Home/>
    ))
    expect(wrapper.contains(<div><Jumbotron></Jumbotron><AddModal></AddModal><DataTable></DataTable></div>)).toBe(true)
  })
})

describe ('<Carousel/>', () => {
  it('should render Carousel', () => {
    const wrapper = shallow ((
      <Jumbotron></Jumbotron>
    ))
    console.log('here: ======> ', wrapper.find('div'))
    expect(wrapper.find('Carousel')).toHaveLength(1)
    expect(wrapper.find('div')).toHaveLength(4)
    expect(wrapper.find('h2')).toHaveLength(4)
  })
})

describe ('Store', () => {
  const wrapperStore = mount(
    <Provider store = { store }>
      <Home></Home>
    </Provider>
  )
  it('Should load initialState', () => {
    expect(wrapperStore.props().store.getState().passwordReducer).toEqual({
      data: [],
      isLoading: false,
      error: false,
      button: 'Register'
    })
  })
})

describe ('<AddForm/>', () => {
  const wrapperApp = shallow (<AddForm/>, {context: {store}}).dive().dive()
  it('should render Form', () => {
    expect(wrapperApp.find('Form')).toBeTruthy()
  })
  it('Should render Submit Button', () => {
    expect(wrapperApp.find('Button')).toBeTruthy()
  })
  it('Should render FormItem', () => {
    expect(wrapperApp.find('FormItem')).toBeTruthy()
  })
  it('Should warn if password does not contain Upper-case', () => {
    expect(wrapperApp.find('Input')).toHaveLength(5);
    wrapperApp.find('Input').at(1).simulate('change', {
      target: {
        name: 'password',
        value: 'aiue1233'
      }
    })
    console.log(wrapperApp.find('Input').at(3).text());
    expect(wrapperApp.find('.ant-form-explain').at(1).text()).toMatch('Must contain at least 1 lower case alphabetical character')
  })
})

describe('snapshot testing', () => {
  it('rendered app must be the same as snapshot', () => {
    let tree = renderer.create(<Spinner/>)
    expect(tree).toMatchSnapshot()
  })
})
